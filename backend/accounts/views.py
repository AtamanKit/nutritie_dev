from rest_framework import viewsets

from .models import UserSocial
from .serializers import UserSocialSerializer


class UserSocialViewSet(viewsets.ModelViewSet):
    queryset = UserSocial.objects.all()
    serializer_class = UserSocialSerializer
