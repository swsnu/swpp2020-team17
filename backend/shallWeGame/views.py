from django.http import HttpResponse, HttpResponseNotAllowed, JsonResponse, HttpResponseBadRequest, HttpResponseNotFound
from django.shortcuts import redirect
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required

import requests

auth_url_discord='https://discord.com/api/oauth2/authorize?client_id=771395876442734603&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Fapi%2Flogin%2Fredirect&response_type=code&scope=identify'

@login_required(login_url='/api/login/')
def get_authenticated_user(request):
    return JsonResponse({ "msg": "Authenticated" })
    
def discord_login(request):
    if request.method != 'POST':
        return HttpResponseNotAllowed(['POST'])
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
        "scope": "identify"
    }
    headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    response = requests.post('https://discord.com/api/v6/oauth2/token', data=data, headers=headers)
    credentials = response.json()
    access_token = credentials['access_token']
    response = requests.get("http://discord.com/api/v6/users/@me", headers={
        'Authorization': 'Bearer %s' % access_token
    })
    print(response)
    user = response.json()
    print(user)
    return user

def discord_logout(request):
    print()
    return redirect('https://discord.com/api/oauth2/token/revoke')