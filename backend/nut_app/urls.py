from django.urls import path, include
from rest_framework import routers
from .views import CategoriesViewSet, RemediesViewSet

router = routers.DefaultRouter()
router.register(r'categories', CategoriesViewSet)
router.register(r'remedies', RemediesViewSet)

urlpatterns = [
    path('', include(router.urls))    
]
