from django.urls import path, include
from rest_framework import routers
from .views import UserSocialViewSet, ClientViewSet

router = routers.DefaultRouter()
router.register('usersocial', UserSocialViewSet)
router.register('clients', ClientViewSet)

urlpatterns = [
    path('', include(router.urls)),
]