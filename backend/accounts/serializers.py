from djoser.serializers import (
    UserCreateSerializer,
    UserSerializer,
    UserCreatePasswordRetypeSerializer
)

from rest_framework import serializers
from django.contrib.auth.models import User
from .models import UserSocial


class UserCreateSerializer(UserCreateSerializer):
    class Meta:
        model = User
        fields = [
            'id',
            'username',
            'password',
            'email',
            'first_name',
            'last_name',
        ]


class UserCreatePasswordRetypeSerializer(UserCreatePasswordRetypeSerializer):
    class Meta:
        model = User
        fields = [
            'id',
            'username',
            'password',
            'email',
            'first_name',
            'last_name',
        ]


class UserSerializer(UserSerializer):
    class Meta:
        model = User
        fields = [
            'id',
            'username',
            'first_name',
            'last_name',
        ]


class UserSocialSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserSocial
        fields = [
            'id',
            'social_id',
            'email',
            'first_name',
            'last_name',
            'social_from',
        ]
