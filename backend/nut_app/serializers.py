from .models import Categories, Remedies, Brands, Products, Articlefeat
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
            'id',
            'title',
            'text',
            'image_desc',
        ]

class ArticlefeatSerializer(serializers.ModelSerializer):
    article = RemediesSerializer()

    class Meta:
        model = Articlefeat
        fields = [
            'title',
            'article',
        ]

class BrandsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brands
        fields = [
            'title',
            'link',
            'image_desc',
        ]

class ProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = [
            'id',
            'title',
            'product_code',
            'description',
            'administration',
            'contraindications',
            'ingredients',
            'form',
            'stock',
            'price',
            'image_desc',
            'date',
            'category',
            'brand',
        ]
