from django.db import models

class UserSocial(models.Model):
    social_id = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=32)
    last_name = models.CharField(max_length=32)
    social_from = models.CharField(max_length=32)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateTimeField(auto_now=True)

# class Client(models.Model):
#     first_name = models.CharField(max_length=32)
#     last_name = models.CharField(max_length=32)
#     telephone = models.CharField(max_length=32)
#     email = models.EmailField(blank=True)
#     country = models.CharField(max_length=32)
#     region = models.CharField(max_length=32)
#     city = models.CharField(max_length=32)
#     address = models.CharField(max_length=255, blank=True)
#     products = models.JSONField()
#     watched = models.BooleanField(default=False)
#     delivered = models.BooleanField(default=False)