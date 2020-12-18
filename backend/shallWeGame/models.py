'''models.py'''

from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from .managers import DiscordUserOAuth2Manager


class DiscordUser(AbstractBaseUser):
    '''Customized User'''
    objects = DiscordUserOAuth2Manager()

    id = models.AutoField(primary_key=True)  # AutoField?
    is_superuser = models.IntegerField(default=False)
    first_name = models.CharField(max_length=30, default='')
    last_name = models.CharField(max_length=30, default='')
    email = models.EmailField(max_length=75)
    is_staff = models.IntegerField(default=False)
    is_active = models.IntegerField(default=False)
    date_joined = models.DateTimeField(default=None, null=True)
    def has_perm(self):
        '''has_perm'''
        return self.is_superuser

    def has_module_perms(self):
        '''has_module_perms'''
        return self.is_superuser

    # id = models.BigIntegerField(primary_key=True)
    username = models.CharField(max_length=100)
    USERNAME_FIELD = 'username'

    avatar = models.CharField(max_length=100, null=True)
    login = models.BooleanField(default=True, null=True)

    chatroom = models.ForeignKey(
        'Chatroom',
        null=True,
        related_name='member_list',
        on_delete=models.CASCADE
    )
    friend_list = models.ManyToManyField(
        'DiscordUser',
        blank=True,
        db_table='friend_list'
    )
    watched_post_list = models.ManyToManyField(
        'Post',
        blank=True,
        related_name='watched_user',
        db_table='watched_post_list'
    )
    tag_list = models.ManyToManyField(
        'Tag',
        blank=True,
        related_name='user',
        db_table='tag_list'
    )
    shallwe_room = models.ManyToManyField(
        'Chatroom',
        blank=True,
        related_name='shallwe_receiver',
        db_table='shallwe_room'
    )

    is_authenticated = True

class Tag(models.Model):
    '''Tag'''
    image = models.ImageField(blank=True)
    name = models.CharField(max_length=30)

class Post(models.Model):
    '''Post'''
    image = models.TextField(blank=True, null=True)
    content = models.TextField(default="")
    author = models.ForeignKey(
        DiscordUser,
        related_name='post_list',
        on_delete=models.CASCADE,
    )
    tag = models.ForeignKey(
        Tag,
        on_delete=models.CASCADE,
    )
    like_num = models.IntegerField(default=0)
    liking_user_list = models.ManyToManyField(
        DiscordUser,
        related_name='liking_post_list',
        blank=True
    )

class Comment(models.Model):
    '''Comment'''
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
    '''Chatroom'''
    is_global = models.BooleanField()
    title = models.CharField(max_length=100)
    tag = models.ForeignKey(
        Tag,
        blank=True,
        null=True,
        on_delete=models.CASCADE,
    )
    max_personnel = models.IntegerField()
    discord_link = models.TextField(default="")
    # shallWeReceivers = models.ManyToManyField(
    #     DiscordUser,
    #     related_name='shallWeRooms'
    # )

# class Message(models.Model):
#     author = models.ForeignKey(
#         DiscordUser,
#         on_delete=models.CASCADE,
#     )
#     timestamp = models.DateTimeField(null=True)
#     chatroom = models.ForeignKey(
#         Chatroom,
#         on_delete=models.CASCADE,
#     )
#     content = models.TextField(default="")
