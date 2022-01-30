from .models import Categories, Remedies_feat
from .serializers import CategoriesSerializer, Remedies_featSerializer
from rest_framework import viewsets

class CategoriesViewSet(viewsets.ModelViewSet):
    queryset = Categories.objects.all()
    serializer_class = CategoriesSerializer

class Remedies_featViewSet(viewsets.ModelViewSet):
    queryset = Remedies_feat.objects.all()
    serializer_class = Remedies_featSerializer
