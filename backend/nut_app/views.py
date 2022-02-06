from .models import Categories, Remedies, Brands, Products, Carouselart
from .serializers import CategoriesSerializer, RemediesSerializer, BrandsSerializer, ProductsSerializer, CarouselartSerializer
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response

class CategoriesViewSet(viewsets.ModelViewSet):
    queryset = Categories.objects.all()
    serializer_class = CategoriesSerializer

class RemediesViewSet(viewsets.ModelViewSet):
    queryset = Remedies.objects.all().order_by('-date')
    serializer_class = RemediesSerializer

class CarouselartViewSet(viewsets.ModelViewSet):
    queryset = Carouselart.objects.all()
    serializer_class = CarouselartSerializer

class BrandsViewSet(viewsets.ModelViewSet):
    queryset = Brands.objects.all()
    serializer_class = BrandsSerializer

class ProductsViewSet(viewsets.ModelViewSet):
    queryset = Products.objects.all()
    serializer_class = ProductsSerializer
