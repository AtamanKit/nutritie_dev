from .models import Categories, Remedies, Brands, Products, Carouselart
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

class CarouselartSerializer(serializers.ModelSerializer):
    model = Carouselart
    fields = [
        'title',
        'remedy',
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
