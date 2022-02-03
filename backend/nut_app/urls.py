from django.urls import path, include
from rest_framework import routers
from .views import CategoriesViewSet, RemediesViewSet, BrandsViewSet, ProductsViewSet

router = routers.DefaultRouter()
router.register(r'categories', CategoriesViewSet)
router.register(r'remedies', RemediesViewSet)
router.register(r'brands', BrandsViewSet)
router.register(r'products', ProductsViewSet)
router.register(r'product_single/<int:pk>', ProductsViewSet.ProductSingle)

urlpatterns = [
    path('', include(router.urls))    
]
