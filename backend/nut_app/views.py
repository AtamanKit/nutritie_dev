from .models import Categories
from .serializers import CategoriesSerializer
from rest_framework import viewsets

class CategoriesViewSet(viewsets.ModelViewSet):
    queryset = Categories.objects.all()
    serializer_class = CategoriesSerializer
