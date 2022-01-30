from .models import Categories, Remedies
from .serializers import CategoriesSerializer, RemediesSerializer
from rest_framework import viewsets

class CategoriesViewSet(viewsets.ModelViewSet):
    queryset = Categories.objects.all()
    serializer_class = CategoriesSerializer

class RemediesViewSet(viewsets.ModelViewSet):
    queryset = Remedies.objects.all()
    serializer_class = RemediesSerializer
