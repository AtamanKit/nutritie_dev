from django.urls import path, include
from rest_framework import routers
from .views import CategoriesViewSet, RemediesViewSet, BrandsViewSet

router = routers.DefaultRouter()
router.register(r'categories', CategoriesViewSet)
router.register(r'remedies', RemediesViewSet)
router.register(r'brands', BrandsViewSet)

urlpatterns = [
    path('', include(router.urls))    
]
