from django.urls import path, include

from rest_framework import routers

from .views import UserSocialViewSet


router = routers.DefaultRouter()
router.register('usersocial', UserSocialViewSet)

urlpatterns = [
    path('', include(router.urls)),
]