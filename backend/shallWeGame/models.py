from django.db import models
from .managers import DiscordUserOAuth2Manager
from django.contrib.auth.models import AbstractBaseUser

class DiscordUser(AbstractBaseUser):
    objects = DiscordUserOAuth2Manager()

    id = models.AutoField(primary_key=True)  # AutoField?
    is_superuser = models.IntegerField(default=False)
    first_name = models.CharField(max_length=30, default='')
    last_name = models.CharField(max_length=30, default='')
    email = models.EmailField(max_length=75)
    is_staff = models.IntegerField(default=False)
    is_active = models.IntegerField(default=False)
    date_joined = models.DateTimeField(default=None, null=True)
    def has_perm(self, perm, obj=None):
        return self.is_superuser

    def has_module_perms(self, app_label):
        return self.is_superuser

    # id = models.BigIntegerField(primary_key=True)
    username = models.CharField(max_length=100)
    USERNAME_FIELD = 'username'

    avatar = models.CharField(max_length=100, null=True)
    login = models.BooleanField(default=True, null=True)

    chatroom = models.ForeignKey(
        'Chatroom',
        null=True,
        on_delete=models.CASCADE
    )
    friends = models.ManyToManyField(
        'DiscordUser',
        blank=True,
        related_name='friendList',
        db_table='friends'
    )
    watchedPosts = models.ManyToManyField(
        'Post', 
        blank=True,
        related_name='watchedUser',
        db_table='wacthedPosts'
    )
    tags = models.ManyToManyField(
        'Tag',
        blank=True,
        related_name='user',
        db_table='tags'
    )
    shallWeRoom = models.ManyToManyField(
        'Chatroom',
        blank=True,
        related_name='shallWe',
        db_table='shallWeRoom'
    )

    def is_authenticated(self, request):
        return True
        

class Tag(models.Model):
    image = models.ImageField(blank=True)
    name = models.CharField(max_length=30)

class Post(models.Model):
    image = models.TextField(blank=True, null=True)
    content = models.TextField(default="")
    author = models.ForeignKey(
        DiscordUser,
        related_name='postlist',
        on_delete=models.CASCADE,
    )
    tag = models.ForeignKey(
        Tag,
        on_delete=models.CASCADE,
    )
    likingUsers = models.ManyToManyField(
        DiscordUser,
        related_name='likingPosts',
        blank=True
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