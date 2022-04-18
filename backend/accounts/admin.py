from django.contrib import admin
from django.db import models
from django_json_widget.widgets import JSONEditorWidget
from .models import UserSocial, Client

from django.utils.html import format_html

class ClientAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'first_name',
        'last_name',
        'telephone',
        'email',
        'country',
        'region',
        'watched',
        'delivered',
    )

    readonly_fields = ('id',)

    formfield_overrides = {
        models.JSONField: {'widget': JSONEditorWidget}
    }

class UserSocialAdmin(admin.ModelAdmin):
    list_display = (
        'first_name',
        'last_name',
        'email',
    )

admin.site.register(UserSocial, UserSocialAdmin)
admin.site.register(Client, ClientAdmin)