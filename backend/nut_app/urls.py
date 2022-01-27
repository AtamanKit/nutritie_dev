from django.urls import path, include
from rest_framework import routers
from .views import CategoriesViewSet

router = routers.DefaultRouter()
router.register(r'categories', CategoriesViewSet)

urlpatterns = [
    path('', include(router.urls))    
]
