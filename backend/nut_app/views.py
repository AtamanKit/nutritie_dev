from .models import Categories, Remedies, Brands, Products, Articlefeat, Articlecollection
from .serializers import CategoriesSerializer, RemediesSerializer, BrandsSerializer, ProductsSerializer, ArticlefeatSerializer, ArticlecollectionSerializer
from rest_framework import viewsets

class CategoriesViewSet(viewsets.ModelViewSet):
    queryset = Categories.objects.all()
    serializer_class = CategoriesSerializer

class RemediesViewSet(viewsets.ModelViewSet):
    queryset = Remedies.objects.all().order_by('-date')
    serializer_class = RemediesSerializer

class ArticlelastViewSet(viewsets.ModelViewSet):
    queryset = Remedies.objects.all().order_by('-date')[:10]
    serializer_class = RemediesSerializer

class ArticlecollectionViewSet(viewsets.ModelViewSet):
    queryset = Articlecollection.objects.all()
    serializer_class = ArticlecollectionSerializer

class ArticlefeatViewSet(viewsets.ModelViewSet):
    queryset = Articlefeat.objects.all()
    serializer_class = ArticlefeatSerializer

class BrandsViewSet(viewsets.ModelViewSet):
    queryset = Brands.objects.all()
    serializer_class = BrandsSerializer

class ProductsViewSet(viewsets.ModelViewSet):
    queryset = Products.objects.all()
    serializer_class = ProductsSerializer

class AlimentViewSet(viewsets.ModelViewSet):
    queryset = Products.objects.filter(category=1)
    serializer_class = ProductsSerializer
    
class SuplimentViewSet(viewsets.ModelViewSet):
    queryset = Products.objects.filter(category=2)
    serializer_class = ProductsSerializer
