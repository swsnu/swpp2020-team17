# views.py
####
###
import json
from json import JSONDecodeError
from django.http import HttpResponse, HttpResponseNotAllowed, JsonResponse, \
    HttpResponseBadRequest, HttpResponseNotFound
from django.shortcuts import redirect
from django.contrib.auth import login, logout
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import ensure_csrf_cookie
import requests
from .models import DiscordUser, Post, Comment, Tag, Chatroom
from .recommend import Recommend

AUTH_URL_DISCORD = 'https://discord.com/api/oauth2/authorize?client_id=782980326459965490&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Fapi%2Flogin%2Fredirect&response_type=code&scope=identify'

def discord_login(request):
    '''Redirect to Auth Page'''
    return redirect(AUTH_URL_DISCORD)

@ensure_csrf_cookie
def discord_login_redirect(request):
    '''Redirect when Logged In'''
    code = request.GET.get('code')
    user = exchange_code(code)
    try:
        discord_user = DiscordUser.objects.get(username=user['username'])
        discord_user.login = True
        print('signup user')
    except DiscordUser.DoesNotExist:
        print('new user')
        print(user)
        discord_user = DiscordUser(
            # id=user['id'],
            username=user['username'],
            avatar=user['avatar'],
            login=True,
        )
        discord_user.save()
    login(request, discord_user)
    return redirect("http://localhost:3000/")


def exchange_code(code: str):
    '''Exchange Code with Discord API'''
    data = {
        "client_id": "782980326459965490",
        "client_secret": "wmTVf-X76Zsk_9uNuTiBHrSYtY6Xbe11",
        "grant_type": "authorization_code",
        "code": code,
        "redirect_uri": "http://localhost:8000/api/login/redirect",
        "scope": "identify",
        "auth_url": "https://discordapp.com/api/oauth2/authorize",
    }
    headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    response = requests.post('https://discord.com/api/v6/oauth2/token', data=data, headers=headers)
    credentials = response.json()
    access_token = credentials['access_token']
    response = requests.get("http://discord.com/api/v6/users/@me", headers={
        'Authorization': 'Bearer %s' % access_token,
        "Content-Type": 'application/json'
    })
    user = response.json()
    return user


@ensure_csrf_cookie
def discord_logout(request):
    '''Not Implemented'''
    user = DiscordUser.objects.filter(id=request.user.id)
    user.login = False
    print(user.login)
    logout(request)
    return redirect('http://localhost:3000/login/')


######################
# user
######################
def current_user(request):  # get current user information
    '''Get Current User'''
    user = request.user

    chatroom = user.chatroom.id if user.chatroom is not None else -1
    friend_list = [friend['id'] for friend in user.friend_list.all().values()]
    post_list = [post['id'] for post in user.post_list.all().values()]
    shallwe_room_list = [room['id'] for room in user.shallwe_room.all().values()]
    watched_post_list = [post['id'] for post in user.watched_post_list.all().values()]
    tag_list = [tag['id'] for tag in user.tag_list.all().values()]
    response_dict = {"id": user.id, "username": user.username, "login": user.login,
                     "avatar": user.avatar, "chatroom": chatroom, "friendList": friend_list,
                     "postList": post_list, "shallWeRoomList": shallwe_room_list,
                     "watchedPostList": watched_post_list, "tagList": tag_list}
    # print(response_dict)
    return HttpResponse(content=json.dumps(response_dict), status=201)

def user_list(request):
    '''Get User List'''
    # non-allowed requests returns 405
    if request.method != 'GET':
        return HttpResponseNotAllowed(['GET'])

    user_object_list = [user for user in DiscordUser.objects.all()]
    user_response_list = []
    for user in user_object_list:
        chatroom = user.chatroom.id if user.chatroom is not None else -1
        friend_list = [friend['id'] for friend in user.friend_list.all().values()]
        post_list = [post['id'] for post in user.post_list.all().values()]
        shallwe_room_list = [room['id'] for room in user.shallwe_room.all().values()]
        watched_post_list = [post['id'] for post in user.watched_post_list.all().values()]
        tag_list = [tag['id'] for tag in user.tag_list.all().values()]
        user_response_list.append({"id": user.id, "username": user.username, "login": user.login,
                                   "avatar": user.avatar, "chatroom": chatroom,
                                   "friendList": friend_list,
                                   "postList": post_list, "shallWeRoomList": shallwe_room_list,
                                   "watchedPostList": watched_post_list, "tagList": tag_list})
    print(user_response_list)
    return JsonResponse(user_response_list, safe=False)


def user_info(request, user_id=0):
    '''Get User and Put User'''
    # non-allowed requests returns 405
    if request.method != 'GET' and request.method != 'PUT':
        return HttpResponseNotAllowed(['GET', 'PUT'])
    # non-existing user returns 404
    try:
        user = DiscordUser.objects.get(id=user_id)
    except DiscordUser.DoesNotExist:
        return HttpResponseNotFound()

    if request.method == 'GET':
        print(user.username)
        chatroom = user.chatroom.id if user.chatroom is not None else -1
        friend_list = [friend['id'] for friend in user.friend_list.all().values()]
        post_list = [post['id'] for post in user.post_list.all().values()]
        shallwe_room_list = [room['id'] for room in user.shallwe_room.all().values()]
        watched_post_list = [post['id'] for post in user.watched_post_list.all().values()]
        tag_list = [tag['id'] for tag in user.tag_list.all().values()]
        response_dict = {"id": user.id, "username": user.username, "login": user.login,
                         "avatar": user.avatar, "chatroom": chatroom, "friendList": friend_list,
                         "postList": post_list, "shallWeRoomList": shallwe_room_list,
                         "watchedPostList": watched_post_list, "tagList": tag_list}
        return HttpResponse(content=json.dumps(response_dict), status=201)

    if request.method == 'PUT':
        user = DiscordUser.objects.get(id=user_id)
        print('this : ', user)
        # # non-author returns 403
        # if user != request.user:
        #     return HttpResponse(status=403)
        try:
            req_data = json.loads(request.body.decode())

            user_username = req_data['username']
            user_login = req_data['login']
            user_avatar = req_data['avatar']
            user_chatroom = req_data['chatroom']
            user_friend_list = req_data['friendList']
            user_post_list = req_data['postList']

            user_shallwe_room = req_data['shallWeRoomList']
            user_watched_post_list = req_data['watchedPostList']

            user_tag_list = req_data['tagList']

        except (KeyError, JSONDecodeError):
            return HttpResponseBadRequest()

        user.username = user_username
        user.login = user_login
        user.avatar = user_avatar
        user.chatroom = Chatroom.objects.get(id=user_chatroom) if user_chatroom != -1 else None
        user.friend_list.set([DiscordUser.objects.get(id=friend_id) \
            for friend_id in user_friend_list])
        user.post_list.set([Post.objects.get(id=post_id) for post_id in user_post_list])
        user.shallwe_room.set([Chatroom.objects.get(id=room_id) for room_id in user_shallwe_room])
        user.watched_post_list.set(
            [Post.objects.get(id=post_id) for post_id in user_watched_post_list])
        user.tag_list.set([Tag.objects.get(id=tag_id) for tag_id in user_tag_list])
        user.save()
        return HttpResponse(status=200)


######################
# post
######################
@login_required(login_url='/api/login/')
def post_list(request):
    '''Get Post List and Post New Post'''
    # non-allowed requests returns 405
    if request.method != 'GET' and request.method != 'POST':
        return HttpResponseNotAllowed(['GET', 'POST'])

    if request.method == 'GET':
        post_response_list = [
            {"id": post.id, "image": post.image, "content": post.content, "author": post.author_id,
             "authorName": post.author.username,
             "authorAvatar": post.author.avatar, "tag": post.tag_id, "likeNum": len(post.liking_user_list.all()),
             "likingUserList": [user.id for user in post.liking_user_list.all()]
            } for post in Post.objects.all()]
        return JsonResponse(post_response_list, safe=False)
    # request.method == 'POST'
    if request.method == 'POST':
        try:
            req_data = json.loads(request.body.decode())
            post_image = req_data['image']
            post_content = req_data['content']
            post_tag = req_data['tag']
        except (KeyError, JSONDecodeError):
            return HttpResponseBadRequest()
        post_author = request.user
        tag = Tag.objects.get(name=post_tag)
        post = Post(image=post_image, content=post_content, author=post_author, tag=tag)
        post.save()
        response_dict = {"id": post.id, "image": post.image, "content": post.content,
                        "author": post_author.id, "authorName": post_author.username,
                        "authorAvatar": post_author.avatar, "tag": post.tag.id,
                        "likeNum": len(post.liking_user_list.all()),
                        # "likingUserList": [post_author]
                        }
    print(response_dict)
    return HttpResponse(content=json.dumps(response_dict), status=201)

@login_required(login_url='/api/login/')
def recommend_post(request):
    # like
    # write
    # watched
    user = request.user
    watched = user.watched_post_list.all().values()
    wrote = user.post_list.all().values()
    like = user.liking_post_list.all().values()

    post_list = []

    for post in watched:
        post_list.append(post)
    for post in wrote:
        post_list.append(post)
    for post in like:
        post_list.append(post)

    # HS starts from 0  // 2
    # LoL starts from 1400  // 1
    # MP starts from 2359  // 3

    Lo = []
    HS = []
    MP = []

    for post in post_list:
        if post.tag.id == 1:
            Lo.append(post.content)
        elif post.tag.id == 2:
            HS.append(post.content)
        elif post.tag.id == 3:
            MP.append(post.content)

    rec = []
    rec += Recommend.recommend_with(1, Lo)
    rec += Recommend.recommend_with(2, HS)
    rec += Recommend.recommend_with(3, MP)
    print(rec)
    post_response_list = []

    for index in rec:
        post = Post.objects.get(id=index)
        post_response_list.append({"id": post.id, "image": post.image, "content": post.content, "author": post.author_id,
                "authorName": post.author.username,
                "authorAvatar": post.author.avatar, "tag": post.tag_id, "likeNum": len(post.liking_user_list.all()),
                "likingUserList": [user.id for user in post.liking_user_list.all()]})
    return JsonResponse(post_response_list, safe=False)


@login_required(login_url='/api/login/')
def post_info(request, post_id=0):
    '''Get Post Info, Put Post, and Delete Post'''
    # non-allowed requests returns 405
    if request.method != 'GET' and request.method != 'PUT' and request.method != 'DELETE':
        return HttpResponseNotAllowed(['GET', 'PUT', 'DELETE'])
    # non-existing post returns 404
    try:
        post = Post.objects.get(id=post_id)
    except Post.DoesNotExist:
        return HttpResponseNotFound()

    if request.method == 'GET':
        post = Post.objects.get(id=post_id)
        liking_user_object_list = [liking_user for liking_user in
                                   post.liking_user_list.all().values()]
        liking_user_response_list = []
        for liking_user in liking_user_object_list:
            liking_user_response_list.append(liking_user['id'])
        return JsonResponse(
            {"id": post.id, "image": post.image, "content": post.content, "author": post.author_id,
             "authorName": post.author.username,
             "authorAvatar": post.author.avatar, "tag": post.tag.id, "likeNum": len(post.liking_user_list.all()),
             "likingUserList": [user.id for user in post.liking_user_list.all()]})
    if request.method == 'PUT':
        post = Post.objects.get(id=post_id)
        try:
            req_data = json.loads(request.body.decode())
            post_content = req_data['content']
            post_liking_user_list = req_data['likingUserList']
        except (KeyError, JSONDecodeError):
            return HttpResponseBadRequest()
        post = Post.objects.get(id=post_id)
        print(post_liking_user_list)
        post.liking_user_list.set([DiscordUser.objects.get(id=user_id) for user_id in post_liking_user_list])
        post.save()
        response_dict = {"id": post.id, "image": post.image, "content": post_content,
                         "author": post.author_id, "authorName": post.author.username,
                         "authorAvatar": post.author.avatar, "tag": post.tag.id,
                         "likeNum": len(post_liking_user_list),
                         "likingUserList": post_liking_user_list}
        return HttpResponse(content=json.dumps(response_dict), status=200)
    # request.method == 'DELETE'
    post = Post.objects.get(id=post_id)
    # non-author returns 403
    if post.author != request.user:
        return HttpResponse(status=403)
    post.delete()
    return HttpResponse(status=200)

######################
# comment
######################

@login_required(login_url='/api/login/')
def comment_list(request, post_id=0):
    '''Get Comment List and Post New Comment'''
    # non-allowed requests returns 405
    if request.method != 'GET' and request.method != 'POST':
        return HttpResponseNotAllowed(['GET', 'POST'])

    if request.method == 'GET':
        comment_object_list = [comment for comment in Comment.objects.all() if comment.post.id==post_id]
        comment_response_list = []
        for comment in comment_object_list:
            comment_response_list.append(
                {"id": comment.id, "post": comment.post.id, "content": comment.content, "author": comment.author.id})
        return JsonResponse(comment_response_list, safe=False)
    # request.method == 'POST'
    try:
        req_data = json.loads(request.body.decode())
        comment_content = req_data['content']
    except (KeyError, JSONDecodeError):
        return HttpResponseBadRequest()
    comment_author = request.user
    comment_post = Post.objects.get(id=post_id)
    comment = Comment(post=comment_post, content=comment_content, author=comment_author)
    comment.save()
    response_dict = {"id": comment.id, "post": comment.post.id, "content": comment.content,
                        "author": comment.author.id}
    return HttpResponse(content=json.dumps(response_dict), status=200)



@login_required(login_url='/api/login/')
def comment_info(request, comment_id=0):
    '''Get Comment Info, Put Comment, and Delete Comment'''
    # non-allowed requests returns 405
    if request.method != 'GET' and request.method != 'PUT' and request.method != 'DELETE':
        return HttpResponseNotAllowed(['GET', 'PUT', 'DELETE'])
    # non-existing comment returns 404
    try:
        comment = Comment.objects.get(id=comment_id)
    except Comment.DoesNotExist:
        return HttpResponseNotFound()

    if request.method == 'GET':
        comment = Comment.objects.get(id=comment_id)
        return JsonResponse(
            {"post": comment.post.id, "content": comment.content, "author": comment.author.id})
    elif request.method == 'PUT':
        comment = Comment.objects.get(id=comment_id)
        # non-author returns 403
        if comment.author != request.user:
            return HttpResponse(status=403)
        try:
            req_data = json.loads(request.body.decode())
            comment_content = req_data['content']
        except (KeyError, JSONDecodeError):
            return HttpResponseBadRequest()
        comment.content = comment_content
        response_dict = {"id": comment.id, "post": comment.post.id, "content": comment.content,
                         "author": comment.author.id}
        return HttpResponse(content=json.dumps(response_dict), status=200)
    # request.method == 'DELETE'
    comment = Comment.objects.get(id=comment_id)
    # non-author returns 403
    if comment.author != request.user:
        return HttpResponse(status=403)
    comment.delete()
    return HttpResponse(status=200)


######################
# tag
######################
def tag_list(request):
    '''Get Tag List'''
    # non-allowed requests returns 405
    if request.method != 'GET':
        return HttpResponseNotAllowed(['GET'])

    # request.method == 'GET'
    tag_object_list = [tag for tag in Tag.objects.all().values()]
    tag_response_list = []
    for tag in tag_object_list:
        tag_response_list.append({"id": tag['id'], "image": tag['image'], "name": tag['name']})
    print(tag_response_list)
    return JsonResponse(tag_response_list, safe=False)


def tag_info(request, tag_id=0):
    '''Get Tag Info'''
    # non-allowed requests returns 405
    if request.method != 'GET':
        return HttpResponseNotAllowed(['GET'])
    # non-existing tag return 404
    try:
        tag = Tag.objects.get(id=tag_id)
    except Tag.DoesNotExist:
        return HttpResponseNotFound()

    # request.method == 'GET'
    tag = Tag.objects.get(id=tag_id)
    return JsonResponse({'image': tag.image, 'name': tag.name})


######################
# chatroom
######################
@login_required(login_url='/api/login/')
def chatroom_list(request):
    '''Get Chatroom List and Post New Chatroom'''
    # non-allowed requests returns 405
    if request.method != 'GET' and request.method != 'POST':
        return HttpResponseNotAllowed(['GET', 'POST'])

    if request.method == 'GET':
        chatroom_object_list = [chatroom for chatroom in Chatroom.objects.all()]
        chatroom_response_list = []
        for chatroom in chatroom_object_list:
            member_list = [member['id'] for member in chatroom.member_list.all().values()]
            chatroom_response_list.append(
                {"id": chatroom.id, "isGlobal": chatroom.is_global, "title": chatroom.title,
                 "memberList": member_list, "tag": chatroom.tag.id,
                 "maxPersonnel": chatroom.max_personnel, "discordLink": chatroom.discord_link})
        return JsonResponse(chatroom_response_list, safe=False)
    # request.method == 'POST
    try:
        req_data = json.loads(request.body.decode())
        chatroom_is_global = req_data['isGlobal']
        chatroom_title = req_data['title']
        chatroom_tag = req_data['tag']
        chatroom_max_personnel = req_data['maxPersonnel']
    except (KeyError, JSONDecodeError):
        return HttpResponseBadRequest()
    ## to be added. discord link 생성
    chatroom_discord_link = "not yet"
    tag = Tag.objects.get(id=chatroom_tag)
    chatroom = Chatroom(is_global=chatroom_is_global, title=chatroom_title, tag=tag,
                        max_personnel=chatroom_max_personnel,
                        discord_link=chatroom_discord_link)
    chatroom.save()
    # chatroom.member_list.add(request.user)
    response_dict = {"id": chatroom.id, "isGlobal": chatroom.is_global, "title": chatroom.title,
                        "tag": chatroom.tag.id, "maxPersonnel": chatroom.max_personnel,
                        "discordLink": chatroom.discord_link}
    return HttpResponse(content=json.dumps(response_dict), status=200)

@login_required(login_url='/api/login/')
def chatroom_info(request, chatroom_id=0):
    '''Get Chatroom Info, Put Chatroom, and Delete Chatroom'''
    # non-allowed requests returns 405
    if request.method != 'GET' and request.method != 'PUT' and request.method != 'DELETE':
        return HttpResponseNotAllowed(['GET', 'PUT', 'DELETE'])
    # non-existing chatroom returns 404
    try:
        chatroom = Chatroom.objects.get(id=chatroom_id)
    except Chatroom.DoesNotExist:
        return HttpResponseNotFound()

    if request.method == 'GET':
        chatroom = Chatroom.objects.get(id=chatroom_id)
        member_list = [member['id'] for member in chatroom.member_list.all().values()]
        return JsonResponse(
                {"id": chatroom.id, "isGlobal": chatroom.is_global, "title": chatroom.title,
                 "memberList": member_list, "tag": chatroom.tag.id,
                 "maxPersonnel": chatroom.max_personnel, "discordLink": chatroom.discord_link})
    if request.method == 'PUT':
        chatroom = Chatroom.objects.get(id=chatroom_id)
        ## to be added. non-host returns 403
        try:
            req_data = json.loads(request.body.decode())
            chatroom_is_global = req_data['isGlobal']
            chatroom_title = req_data['title']
            chatroom_max_personnel = req_data['maxPersonnel']
            chatroom_member_list = req_data['memberList']
        except (KeyError, JSONDecodeError):
            return HttpResponseBadRequest()
        chatroom.is_global = chatroom_is_global
        chatroom.title = chatroom_title
        chatroom.max_personnel = chatroom_max_personnel
        chatroom.member_list.set([DiscordUser.objects.get(id=member_id) \
            for member_id in chatroom_member_list])
        member_list = [member['id'] for member in chatroom.member_list.all().values()]
        response_dict = {"id": chatroom.id, "isGlobal": chatroom.is_global, "title": chatroom.title,
                         "memberList": member_list, "tag": chatroom.tag,
                         "maxPersonnel": chatroom.max_personnel, "discordLink": chatroom.discord_link}
        return HttpResponse(content=json.dumps(response_dict), status=200)
    # request.method == 'DELETE'
    chatroom = Chatroom.objects.get(id=chatroom_id)
    chatroom.delete()
    return HttpResponse(status=200)

@ensure_csrf_cookie
def token(request):
    '''Get Token'''
    if request.method == 'GET':
        return HttpResponse(status=204)
    return HttpResponseNotAllowed(['GET'])
