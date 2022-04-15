from django.contrib import admin
from .models import UserSocial, Client

class ClientAdmin(admin.ModelAdmin):
    list_display = (
        'first_name',
        'last_name',
        'telephone',
        'email',
        'country',
        'region',
        'watched',
        'delivered',
    )

class UserSocialAdmin(admin.ModelAdmin):
    list_display = (
        'first_name',
        'last_name',
        'email',
    )

admin.site.register(UserSocial, UserSocialAdmin)
admin.site.register(Client, ClientAdmin)