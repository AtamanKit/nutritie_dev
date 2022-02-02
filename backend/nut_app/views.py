from .models import Categories, Remedies, Brands, Products
from .serializers import CategoriesSerializer, RemediesSerializer, BrandsSerializer, ProductsSerializer
from rest_framework import viewsets

class CategoriesViewSet(viewsets.ModelViewSet):
    queryset = Categories.objects.all()
    serializer_class = CategoriesSerializer

class RemediesViewSet(viewsets.ModelViewSet):
    queryset = Remedies.objects.all()
    serializer_class = RemediesSerializer

class BrandsViewSet(viewsets.ModelViewSet):
    queryset = Brands.objects.all()
    serializer_class = BrandsSerializer

class ProductsViewSet(viewsets.ModelViewSet):
    queryset = Products.objects.all()
    serializer_class = ProductsSerializer
