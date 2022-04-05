from djoser.serializers import UserCreateSerializer

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

class UserSocialSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserSocial
        fields = [
            'id',
            'email',
            'first_name',
            'last_name',
            'social_from',
        ]