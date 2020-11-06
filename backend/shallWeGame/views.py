from django.http import HttpResponse, HttpResponseNotAllowed, JsonResponse, HttpResponseBadRequest, HttpResponseNotFound
from django.shortcuts import redirect
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import ensure_csrf_cookie

import requests

auth_url_discord='https://discord.com/api/oauth2/authorize?client_id=771395876442734603&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&response_type=code&scope=identify'

@login_required(login_url='/api/login/')
def get_authenticated_user(request):
    return JsonResponse({ "msg": "Authenticated" })

@ensure_csrf_cookie
def discord_login(request):
    return redirect(auth_url_discord)

def discord_login_redirect(request):
    code = request.GET.get('code')
    print(code)
    user = exchange_code(code)
    discord_user = authenticate(request, user=user)
    discord_user = list(discord_user).pop()
    login(request, discord_user)
    return JsonResponse({ "user": user })

def exchange_code(code: str):
    data = {
        "client_id": "771395876442734603",
        "client_secret": "qMMuitFLFVwqBMcpiH62uY0KXXO5PFZF",
        "grant_type": "authorization_code",
        "code": code,
        "redirect_uri": "http://localhost:8000/api/login/redirect",
        "scope": "identify",
        "auth_url": "https://discordapp.com/api/oauth2/authorize"
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
    print(response)
    user = response.json()
    print(user)
    return user

def discord_logout(request):
    print()
    return redirect('https://discord.com/api/oauth2/token/revoke')