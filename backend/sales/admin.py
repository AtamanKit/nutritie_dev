from django.contrib import admin
from django_json_widget.widgets import JSONEditorWidget
from django.db import models

from .models import Order


class OrderAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'command_id',
        'first_name',
        'last_name',
        'telephone',
        'email',
        'country',
        'region',
        'watched',
        'delivered',
    )

    # readonly_fields = ('id',)

    formfield_overrides = {
        models.JSONField: {'widget': JSONEditorWidget}
    }


admin.site.register(Order, OrderAdmin)
