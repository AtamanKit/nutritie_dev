from rest_framework import serializers
from .models import Order


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = [
            'id',
            'command_id',
            'first_name',
            'last_name',
            'telephone',
            'email',
            'country',
            'region',
            'city',
            'address',
            'products',
            'watched',
            'delivered',
        ]
