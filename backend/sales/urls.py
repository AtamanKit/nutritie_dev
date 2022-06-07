from django.urls import path, include
from rest_framework import routers
from .views import OrderViewSet, LastOrderViewSet


router = routers.DefaultRouter()
router.register('orders', OrderViewSet)
router.register('lastorder', LastOrderViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
