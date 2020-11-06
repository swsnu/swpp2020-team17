from django.db import models
from .managers import DiscordUserOAuth2Manager

class DiscordUser(models.Model):
    objects = DiscordUserOAuth2Manager()

    id = models.BigIntegerField(primary_key=True)
    discord_tag = models.CharField(max_length=100)
    avatar = models.CharField(max_length=100, null=True)
    public_flags = models.IntegerField()
    flags = models.IntegerField()
    locale = models.CharField(max_length=100)
    mfa_enabled = models.BooleanField()
    last_login = models.DateTimeField(null=True)

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
    members = models.ManyToManyField(
        DiscordUser,
        related_name='chatroom'
    )
    tag = models.ForeignKey(
        Tag,
        on_delete=models.CASCADE,
    )
    maxPersonnel = models.IntegerField()
    discordLink = models.TextField(default="")

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