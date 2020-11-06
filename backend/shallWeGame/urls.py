from django.urls import path, include
from . import views
from django.conf.urls import url
from django.conf import settings

urlpatterns = [
    path('auth/user/', views.get_authenticated_user, name='discord_authenticated'),
    path('login/', views.discord_login, name='discord_login'),
    path('login/redirect/', views.discord_login_redirect, name='discord_login_redirect'),
    path('logout/', views.discord_logout, name='discord_logout'),
]
