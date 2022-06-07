from django.contrib import admin
from .models import UserSocial


class UserSocialAdmin(admin.ModelAdmin):
    list_display = (
        'first_name',
        'last_name',
        'email',
    )


admin.site.register(UserSocial, UserSocialAdmin)
