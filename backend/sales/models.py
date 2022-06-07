from django.db import models


class Order(models.Model):
    command_id = models.IntegerField(null=True)
    first_name = models.CharField(max_length=32)
    last_name = models.CharField(max_length=32)
    telephone = models.CharField(max_length=32)
    email = models.EmailField(blank=True)
    country = models.CharField(max_length=32)
    region = models.CharField(max_length=32)
    city = models.CharField(max_length=32)
    address = models.CharField(max_length=255, blank=True)
    products = models.JSONField()
    watched = models.BooleanField(default=False)
    delivered = models.BooleanField(default=False)
