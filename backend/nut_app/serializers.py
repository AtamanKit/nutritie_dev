from .models import Categories, Remedies_feat
from rest_framework import serializers

class CategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categories
        fields = [
            'title',
            'description',
            'image_desc',
        ]

class Remedies_featSerializer(serializers.ModelSerializer):
    class Meta:
        model = Remedies_feat
        fields = [
            'title',
            'description',
            'image_desc',
        ]
