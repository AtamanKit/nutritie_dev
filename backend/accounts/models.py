from django.db import models


class UserSocial(models.Model):

    id = models.CharField(max_length=255, primary_key=True)
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    social_from = models.CharField(max_length=32)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateTimeField(auto_now=True)