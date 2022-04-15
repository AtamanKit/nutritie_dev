from rest_framework import viewsets
from .models import UserSocial, Client
from .serializers import UserSocialSerializer, ClientSerializer

class UserSocialViewSet(viewsets.ModelViewSet):
    queryset = UserSocial.objects.all()
    serializer_class = UserSocialSerializer

class ClientViewSet(viewsets.ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer