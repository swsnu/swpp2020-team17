from django.http import HttpResponse, HttpResponseNotAllowed, JsonResponse, HttpResponseBadRequest, HttpResponseNotFound
from django.shortcuts import redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import ensure_csrf_cookie
from json import JSONDecodeError
from django.forms.models import model_to_dict

import json
import requests
from .models import DiscordUser, Post, Comment, Tag, Chatroom

auth_url_discord='https://discord.com/api/oauth2/authorize?client_id=771395876442734603&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Fapi%2Flogin%2Fredirect&response_type=code&scope=identify'

def discord_login(request):
    return redirect(auth_url_discord)

@ensure_csrf_cookie
def discord_login_redirect(request):
    code = request.GET.get('code')
    user = exchange_code(code)
    try:
        discordUser = DiscordUser.objects.get(username=user['username'])
        discordUser.login = True
        print('signup user')
    except DiscordUser.DoesNotExist:
        print('new user')
        print(user)
        discordUser = DiscordUser(
            # id=user['id'],
            username=user['username'],
            avatar=user['avatar'],
            login=True,
        )
        discordUser.save()
    login(request, discordUser)
    return redirect("http://localhost:3000/post")

def exchange_code(code: str):
    data = {
        "client_id": "771395876442734603",
        "client_secret": "qMMuitFLFVwqBMcpiH62uY0KXXO5PFZF",
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
        "Content-Type" : 'application/json'
    })
    user = response.json()
    return user

# @login_required(login_url='/api/login/')
@ensure_csrf_cookie
def discord_logout(request):
    user = DiscordUser.objects.filter(id=request.user.id)
    user.login = False
    print(user.login)
    logout(request)
    return redirect('http://localhost:3000/login/')


######################
# user
######################

def currentUser(request):  # get current user information
    user = request.user
    
    # tag1 = Tag.objects.get(id=1)
    # tag2 = Tag.objects.get(id=2)
    # user.tags.add(tag1)
    # user.tags.add(tag2)
    # print("user tags")
    # print(user.tags.all().values())
    # print("tags user")
    # print(tag1.user.all().values())

    try:
        tempChat = Chatroom.objects.create(id= -1, toggleGlobal=True, title='temp', tag=Tag.objects.get(id=1), maxPersonnel=0)
    except:
        tempChat = Chatroom.objects.get(id= -1)
    chatroom = user.chatroom.id if user.chatroom is not None else tempChat.id
    friendList = [friend['id'] for friend in user.friends.all().values()]
    postList = [post['id'] for post in user.postlist.all().values()]
    shallWeRoomList = [room['id'] for room in user.shallWeRoom.all().values()]
    watchedPostList = [post['id'] for post in user.watchedPosts.all().values()]
    tagList = [tag['id'] for tag in user.tags.all().values()]
    response_dict = {"id": user.id, "username": user.username, "login": user.login,
                    "avatar": user.avatar, "chatroom": chatroom, "friendList": friendList,
                    "postList": postList, "shallWeRoomList": shallWeRoomList, "watchedPostList": watchedPostList, "tagList": tagList}
    return HttpResponse(content=json.dumps(response_dict), status=201)
    
def user_list(request):
    # non-allowed requests returns 405
    if request.method != 'GET':
        return HttpResponseNotAllowed(['GET'])
    
    user_object_list = [user for user in DiscordUser.objects.all()]
    user_response_list = []
    for user in user_object_list:
        chatroom = user.chatroom.id if user.chatroom is not None else -1
        friendList = [friend['id'] for friend in user.friends.all().values()]
        postList = [post['id'] for post in user.postlist.all().values()]
        shallWeRoomList = [room['id'] for room in user.shallWeRoom.all().values()]
        watchedPostList = [post['id'] for post in user.watchedPosts.all().values()]
        tagList = [tag['id'] for tag in user.tags.all().values()]
        user_response_list.append({"id": user.id, "username": user.username, "login": user.login,
                    "avatar": user.avatar, "chatroom": chatroom, "friendList": friendList,
                    "postList": postList, "shallWeRoomList": shallWeRoomList, "watchedPostList": watchedPostList, "tagList": tagList})
    print(user_response_list)
    return JsonResponse(user_response_list, safe=False)    


def user_info(request, id=0):
    # non-allowed requests returns 405  
    if request.method != 'GET' and request.method != 'PUT':
        return HttpResponseNotAllowed(['GET', 'PUT'])
    # non-existing user returns 404
    try:
        user = DiscordUser.objects.get(id=id)
    except DiscordUser.DoesNotExist:
        return HttpResponseNotFound()

    if request.method == 'GET':
        friendList = [friend.id for friend in user.friends.all().values()]
        postList = [post.id for post in user.postlist.all().values()]
        shallWeRoomList = [room.id for room in user.shallWeRoom.all().values()]
        watchedPostList = [post.id for post in user.watchedPosts.all().values()]
        tagList = [tag.id for tag in user.tags.all().values()]
        response_dict = {"id": user.id, "username": user.username, "login": user.login,
                        "avatar": user.avatar, "chatroom": chatroom, "friendList": friendList,
                        "postList": postList, "shallWeRoomList": shallWeRoomList, "watchedPostList": watchedPostList, "tagList": tagList}
        return HttpResponse(content=json.dumps(response_dict), status=201)
    
    if request.method == 'PUT':
        user = DiscordUser.objects.get(id=id)
        print('this : ', user)
        # non-author returns 403
        if user != request.user:
            return HttpResponse(status=403)
        try:
            req_data = json.loads(request.body.decode())

            user_username = req_data['username']
            user_login = req_data['login']
            user_avatar = req_data['avatar']
            user_chatroom = req_data['chatroom']
            user_friendList = req_data['friendList']
            user_postlist = req_data['postList']

            user_shallWeRoom = req_data['shallWeRoomList']
            user_watchedPosts= req_data['watchedPostList']

        except (KeyError, JSONDecodeError) as e:
            print(e)
            return HttpResponseBadRequest()

        user.username = user_username
        user.login = user_login
        user.avatar = user_avatar
        # tempChat = Chatroom.objects.create(id= -1, toggleGlobal=True, title='temp', tag=Tag.objects.get(id=1), maxPersonnel=0)
        tempChat = Chatroom.objects.get(id=user_chatroom)
        user.chatroom = tempChat
        user.friendList.set([DiscordUser.objects.get(id=user_id) for user_id in user_friendList])
        user.postlist.set([Post.objects.get(id=post_id) for post_id in user_postlist])
        user.shallWeRoom.set([Chatroom.objects.get(id=room_id) for room_id in user_shallWeRoom])
        user.watchedPosts.set([Post.objects.get(id=post_id) for post_id in user_watchedPosts])
        user.save()
        print(user)

        return JsonResponse(model_to_dict(user), status=200)
        
        # response_dict = {"id": user.id, "username": user.username, "login": user.login,
        #                 "avatar": user.avatar, "chatroom": chatroom, "friendList": friendList,
        #                 "postList": postList, "shallWeRoomList": shallWeRoomList, "watchedPostList": watchedPostList, "tagList": tagList}
        # print(response_dict)
        # return HttpResponse(content=json.dumps(response_dict), status=200)
        

######################
# post
######################
@login_required(login_url='/api/login/')
def post_list(request):
    # non-allowed requests returns 405
    if request.method != 'GET' and request.method != 'POST':
        return HttpResponseNotAllowed(['GET', 'POST'])

    if request.method == 'GET':
        post_response_list= [{"id": post.id, "image": post.image, "content": post.content, "author": post.author_id, "author_name": post.author.username,
        "author_avatar": post.author.avatar, "tag": post.tag_id, "likes": post.likes, "likingUsers": list(post.likingUsers.all())} for post in Post.objects.all()]
        return JsonResponse(post_response_list, safe=False)
    else:   # request.method == 'POST'
        try:
            req_data = json.loads(request.body.decode())
            post_image = req_data['image']
            post_content = req_data['content']
            post_tag = req_data['tag_id']
        except (KeyError, JSONDecodeError) as e:
            return HttpResponseBadRequest()
        post_author = request.user
        tag = Tag.objects.get(id=int(post_tag))
        post = Post(image=post_image, content=post_content, author=post_author, tag=tag)
        response_dict = {"id": post.id, "image": post.image, "content": post.content, "author": post.author_id, "author_name": post.author.username,
        "author_avatar": post.author.avatar, "tag": post.tag.id, "likes": post.likes, "likingUsers": list(post.likingUsers.all())}
        print(response_dict)
        return HttpResponse(content=json.dumps(response_dict), status=201)

@login_required(login_url='/api/login/')
def post_info(request, id=0):
    # non-allowed requests returns 405
    if request.method != 'GET' and request.method != 'PUT' and request.method != 'DELETE':
        return HttpResponseNotAllowed(['GET', 'PUT', 'DELETE'])
    # non-existing post returns 404
    try:
        post = Post.objects.get(id=id)
    except Post.DoesNotExist:
        return HttpResponseNotFound()

    if request.method == 'GET':
        post = Post.objects.get(id=id)
        likingUser_object_list = [likingUser for likingUser in post.likingUsers.all().values()]
        likingUser_response_list = []
        for likingUser in likingUser_object_list:
            likingUser_response_list.append(likingUser.id)
        return JsonResponse({"id": post.id, "image": post.image, "content": post.content, "author": post.author_id, "author_name": post.author.username,
        "author_avatar": post.author.avatar, "tag": post.tag.id, "likes": post.likes, "likingUsers": list(post.likingUsers.all()) })
    elif request.method == 'PUT':
        post = Post.objects.get(id=id)
        # non-author returns 403
        if post.author != request.user:
            return HttpResponse(status=403)
        try:
            req_data = json.loads(request.body.decode())
            post_content = req_data['content']
        except (KeyError, JSONDecodeError) as e:
            return HttpResponseBadRequest()
        post = Post.objects.get(id=id)
        likingUser_response_list = []
        for likingUser in likingUser_object_list:
            likingUser_response_list.append(likingUser.id)
        response_dict = {"id": post.id, "image": post.image, "content": post_content, "author": post.author_id, "author_name": post.author.username,
        "author_avatar": post.author.avatar, "tag": post.tag.id, "likes": post.likes, "likingUsers": list(post.likingUsers.all())}
        return HttpResponse(content=json.dumps(response_dict), status=200)
    else:   #request.method == 'DELETE'
        post = Post.objects.get(id=id)
        # non-author returns 403
        if post.author != request.user:
            return HttpResponse(status=403)
        post.delete()
        return HttpResponse(status=200)
        
@login_required(login_url='/api/login/')
def post_like_toggle(request, id=0):
    # non-allowed requests returns 405
    if request.method != 'POST':
        return HttpResponseNotAllowed(['POST'])
    # non-existing post returns 404
    try:
        post = Post.objects.get(id=id)
    except Post.DoesNotExist:
        return HttpResponseNotFound()
    # request.method == 'POST'
    user = request.user
    filtered_post = user.likingPosts.filter(post=post)
    if filtered_post.exist():
        user.likingPosts.remove(post)
    else:
        user.likingPosts.add(post)
    return HttpResponse(status=200)

@login_required(login_url='/api/login/')
def post_comment(request, id=0):
    # non-allowed requests returns 405
    if request.method != 'GET':
        return HttpResponseNotAllowed(['GET'])
    # non-existing post returns 404
    try:
        post = Post.objects.get(id=id)
    except Post.DoesNotExist:
        return HttpResponseNotFound()
    #request.method == 'GET'
    comment_object_list = [comment for comment in Comment.objects.filter(post=post)]
    comment_response_list = []
    for comment in comment_object_list:
        comment_response_list.append({"post": comment.post.id, "content": comment.content, "author": comment.author.id, "author_name": comment.author.username})
    return JsonResponse(comment_response_list, safe=False)


######################
# comment
######################
@login_required(login_url='/api/login/')
def comment_list(request, id=0):
    # non-allowed requests returns 405
    if request.method != 'GET' and request.method != 'POST':
        return HttpResponseNotAllowed(['GET', 'POST'])

    if request.method == 'GET':
        comment_object_list = [comment for comment in Comment.objects.all()]
        comment_response_list = []
        for comment in comment_object_list:
            comment_response_list.append({"post": comment.post.id, "content": comment.content, "author": comment.author.id, "author_name": comment.author.username})
        return JsonResponse(comment_response_list, safe=False)
    else:   # request.method == 'POST'
        try:
            req_data = json.loads(request.body.decode())
            comment_content = req_data['content']
        except (KeyError, JSONDecodeError) as e:
            return HttpResponseBadRequest()
        comment_author = request.user
        comment_post = Post.objects.get(id=id)
        comment = Comment(post=comment_post, content=comment_content, author=comment_author)
        comment.save()
        response_dict = {"id": comment.id, "post": comment.post.id, "content": comment.content, "author": comment.author.id, "author_name": comment.author.username}
        return HttpResponse(content=json.dumps(response_dict), status=200)

@login_required(login_url='/api/login/')
def comment_info(request, id=0):
    # non-allowed requests returns 405
    if request.method != 'GET' and request.method != 'PUT' and request.method != 'DELETE':
        return HttpResponseNotAllowed(['GET', 'PUT', 'DELETE'])
    # non-existing comment returns 404
    try: 
        comment = Comment.objects.get(id=id)
    except Comment.DoesNotExist:
        return HttpResponseNotFound()

    if request.method == 'GET':
        comment = Comment.objects.get(id=id)
        return JsonResponse({"post": comment.post.id, "content": comment.content, "author": comment.author.id, "author_name": comment.author.username})
    elif request.method == 'PUT':
        comment = Comment.objects.get(id=id)
        # non-author returns 403
        if comment.author != request.user:
            return HttpResponse(status=403)
        try:
            req_data = json.loads(request.body.decode())
            comment_content = req_data['content']
        except (KeyError, JSONDecodeError) as e:
            return HttpResponseBadRequest()
        comment.content = comment_content
        response_dict = {"id": comment.id, "post": comment.post.id, "content": comment.content, "author": comment.author.id, "author_name": comment.author.username}
        return HttpResponse(content=json.dumps(response_dict), status=200)
    else:   # request.method == 'DELETE'
        comment = Comment.objects.get(id=id)
        # non-author returns 403
        if comment.author != request.user:
            return HttpResponse(status=403)
        comment.delete()
        return HttpResponse(status=200)

######################
# tag
######################
def tag_list(request):
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

def tag_info(request, id=0):
    # non-allowed requests returns 405
    if request.method != 'GET':
        return HttpResponseNotAllowed(['GET'])
    # non-existing tag return 404
    try:
        tag = Tag.objects.get(id=id)
    except Tag.DoesNotExist:
        return HttpResponseNotFound()

    # request.method == 'GET'
    tag = Tag.objects.get(id=id)
    return JsonResponse({'image': tag.image, 'name': tag.name})


######################
# chatroom
######################
@login_required(login_url='/api/login/')
def chatroom_list(request):
    # non-allowed requests returns 405
    if request.method != 'GET' and request.method != 'POST':
        return HttpResponseNotAllowed(['GET', 'POST'])

    if request.method == 'GET':
        chatroom_object_list = {chatroom for chatroom in Chatroom.objects.all().values()}
        chatroom_response_list = []
        for chatroom in chatroom_object_list:
            chatroom_response_list.append({"toggleGlobal": chatroom.toggleGlobal, "title": chatroom.title, "members": chatroom.members, "tag": chatroom.tag, "maxPersonnel": maxPersonnel, "discordLink": chatroom.discordLink})
        return JsonResponse(chatroom_response_list, safe=False)
    else:   # request.method == 'POST
        try:
            req_data = json.loads(request.body.decode())
            chatroom_title = req_data['title']
            chatroom_tag = req_data['tag']
            chatroom_maxPersonnel = req_data['maxPersonnel']
        except (KeyError, JSONDecodeError) as e:
            return HttpResponseBadRequest()
        ## to be added. discord link 생성
        chatroom_discordLink = None
        chatroom = Chatroom(toggleGlobal=False, title=chatroom_title, members=request.user, maxPersonnel=chatroom_maxPersonnel, discordLink=chatroom_discordLink)
        chatroom.save()
        response_dict = {"id": chatroom.id, "toggleGlobal": chatroom.toggleGlobal, "title": chatroom.title, "tag": chatroom.tag, "maxPersonnel": maxPersonnel, "discordLink": chatroom.discordLink}
        return HttpResponse(content=json.dumps(response_dict), status=200)


@login_required(login_url='/api/login/')
def chatroom_info(request, id=0):
    # non-allowed requests returns 405
    if request.method != 'GET' and request.method != 'PUT' and request.method != 'DELETE':
        return HttpResponseNotAllowed(['GET', 'PUT', 'DELETE'])
    # non-existing chatroom returns 404
    try: 
        chatroom = Chatroom.objects.get(id=id)
    except Chatroom.DoesNotExist:
        return HttpResponseNotFound()

    if request.method == 'GET':
        chatroom = Chatroom.objects.get(id=id)
        return JsonResponse({"toggleGlobal": chatroom.toggleGlobal, "title": chatroom.title, "members": chatroom.members, "tag": chatroom.tag, "maxPersonnel": maxPersonnel, "discordLink": chatroom.discordLink})
    elif request.method == 'PUT':
        chatroom = Chatroom.objects.get(id=id)
        ## to be added. non-host returns 403
        try:
            req_data = json.loads(request.body.decode())
            chatroom_title = req_data['title']
            chatroom_tag = req_data['tag']
            chatroom_maxPersonnel = req_data['maxPersonnel']
        except (KeyError, JSONDecodeError) as e:
            return HttpResponseBadRequest()
        chatroom.title = chatroom_title
        chatroom.tag = chatroom_tag
        chatroom.maxPersonnel = chatroom_maxPersonnel
        response_dict = {"id": chatroom.id, "toggleGlobal": chatroom.toggleGlobal, "title": chatroom.title, "tag": chatroom.tag, "maxPersonnel": maxPersonnel, "discordLink": chatroom.discordLink}
        return HttpResponse(content=json.dumps(response_dict), status=200)
    else:   # request.method == 'DELETE'
        chatroom = Chatroom.objects.get(id=id)
        chatroom.delete()
        return HttpResponse(status=200)


@login_required(login_url='/api/login/')
def chatroom_global_toggle(request, id=0):
    # non-allowed requests returns 405
    if request.method != 'PUT':
        return HttpResponseNotAllowed(['PUT'])
    # non-existing chatroom returns 404
    try:
        chatroom = Chatroom.objects.get(id=id)
    except Chatroom.DoesNotExist:
        return HttpResponseNotFound()
    # request.method == 'PUT'
    if chatroom.toggleGlobal is True:
        chatroom.toggleGlobal = False
    else: 
        chatroom.toggleGlobal = True
    return HttpResponse(status=200)


@login_required(login_url='/api/login/')
def chatroom_message(request, id=0):
    # non-allowed requests returns 405
    if request.method != 'POST':
        return HttpResponseNotAllowed(['POST'])
    # non-existing chatroom returns 404
    try:
        chatroom = Chatroom.objects.get(id=id)
    except Chatroom.DoesNotExist:
        return HttpResponseNotFound()
    # request.method == 'POST'
    try:
        req_data = json.loads(request.body.decode())
        message_content = req_data['content']
    except (KeyError, JSONDecodeError) as e:
        return HttpResponseBadRequest()
    message = Message(author=request.user, chatroom=chatroom, content=message_content)
    message.save()
    response_dict = {"id": message.id, "author": message.author.id, "chatroom": message.chatroom.id, "content": message.content}
    return HttpResponse(content=json.dumps(response_dict), status=200)

@ensure_csrf_cookie
def token(request):
    if request.method == 'GET':
        return HttpResponse(status=204)
    else:
        return HttpResponseNotAllowed(['GET'])