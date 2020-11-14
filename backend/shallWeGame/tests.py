from django.test import TestCase, Client
import json

from .models import DiscordUser, Tag, Post, Comment, Chatroom, Message
from .auth import DiscordAuthenticationBackend
from django.contrib.auth.models import User

class AuthTestCase(TestCase):
    def test_auth(self):
        user = User.objects.create_user(username='test')
        user.save()
        discorduser = DiscordUser(
            id=user.id,
            username=user.username,
            login=True,
        )
        discorduser.save()
        #response = DiscordAuthenticationBackend.authenticate(request, user)

class ViewTestCase(TestCase):
    def setUp(self):
        discorduser = DiscordUser(
            username='test',
            avatar='',
            login=True,
            chatroom=None,
        )
        discorduser.save()

    def test_login(self):
        client = Client(enforce_csrf_checks=True)
        response = client.get('https://discord.com/api/oauth2/token')
        access_token = response.cookies['access_token'].value
        response = client.get('/api/login/')
        self.assertRedirects(response, 'https://discord.com/api/oauth2/authorize?client_id=771395876442734603&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Fapi%2Flogin%2Fredirect&response_type=code&scope=identify'
                            ,fetch_redirect_response=False)
        
        discorduser = DiscordUser.objects.get(username='test')
        response = client.post('/api/login/redirect/', json.dumps({"username": "test", "avatar": "", "login": "True", "chatroom": "None"}),
                                content_type='application/json', HTTP_X_CSRFTOKEN=access_token)
        
        

    # def test_logout(self):
    #     client = Client(enforce_csrf_checks=True)
    #     response = client.get('/api/token/')
    #     csrftoken = response.cookies['csrftoken'].value
    #     response = client.post('/api/logout/', json.dumps({"id": 1}), content_type='application/json', HTTP_X_CSRFTOKEN=csrftoken)
    #     self.assertRedirects(response, 'http://localhost:3000/post/'
    #                         ,fetch_redirect_response=False)
    
    # def test_currentUser(self):
    #     client = Client(enforce_csrf_checks=True)

    #     response = client.get('/api/currentUser/')
    #     self.assertEqual(response.status_code, 201)