from .models import Categories, Remedies
from rest_framework import serializers

class CategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categories
        fields = [
            'title',
            'description',
            'image_desc',
        ]

class RemediesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Remedies
        fields = [
            'title',
            'description',
            'text',
            'image_desc',
        ]
