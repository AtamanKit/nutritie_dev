from .models import Categories, Remedies, Brands, Products
from .serializers import CategoriesSerializer, RemediesSerializer, BrandsSerializer, ProductsSerializer
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response

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

    def ProductSingle(request, pk):
        queryset = Products.objects.all()
        serializer = ProductSerializer(queryset)

        return Response(serializer.data)

#@api_view(['GET'])
#def ProductSingle(request, pk):
#    if request.method == 'GET':
#        queryset = Products.objects.get(pk=pk)
#        serializer = ProductSerializer(queryset)
#
#        return Response(serializer.data)
