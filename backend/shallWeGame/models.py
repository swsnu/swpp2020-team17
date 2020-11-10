from django.db import models
from .managers import DiscordUserOAuth2Manager
from django.contrib.auth.models import AbstractBaseUser

class DiscordUser(AbstractBaseUser):
    objects = DiscordUserOAuth2Manager()

    id = models.BigIntegerField(primary_key=True)
    friend_id_list = models.
    chatroom = models.IntegerField(default=-1)
    username = models.CharField(max_length=100, null=True)
    avatar = models.CharField(max_length=100, null=True)
    login = models.BooleanField()
    
    def is_authenticated(self, request):
        return True

class Tag(models.Model):
    image = models.ImageField(blank=True)
    name = models.CharField(max_length=30)

class Post(models.Model):
    image = models.ImageField(blank=True)
    content = models.TextField(default="")
    author = models.ForeignKey(
        DiscordUser,
        on_delete=models.CASCADE,
    )
    tag = models.ForeignKey(
        Tag,
        on_delete=models.CASCADE,
    )
    likingUsers = models.ManyToManyField(
        DiscordUser,
        related_name='likingPosts',
    )
    watchedUsers = models.ManyToManyField(
        DiscordUser,
        related_name='watchedPosts',
    )

class Comment(models.Model):
    post = models.ForeignKey(
        Post,
        on_delete=models.CASCADE,
    )
    content = models.TextField(default="")
    author = models.ForeignKey(
        DiscordUser,
        on_delete=models.CASCADE,
    )

class Chatroom(models.Model):
    toggleGlobal = models.BooleanField()
    title = models.CharField(max_length=100)
    tag = models.ForeignKey(
        Tag,
        on_delete=models.CASCADE,
    )
    maxPersonnel = models.IntegerField()
    discordLink = models.TextField(default="")
    shallWeReceivers = models.ManyToManyField(
        DiscordUser,
        related_name='shallWeRooms'
    )

class Message(models.Model):
    author = models.ForeignKey(
        DiscordUser,
        on_delete=models.CASCADE,
    )
    timestamp = models.DateTimeField(null=True)
    chatroom = models.ForeignKey(
        Chatroom, 
        on_delete=models.CASCADE,
    )
    content = models.TextField(default="")