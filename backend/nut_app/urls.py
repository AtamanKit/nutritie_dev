from django.urls import path, include
from rest_framework import routers
from .views import CategoriesViewSet, RemediesViewSet, BrandsViewSet, ProductsViewSet, CarouselartViewSet

router = routers.DefaultRouter()
router.register(r'categories', CategoriesViewSet)
router.register(r'remedies', RemediesViewSet)
router.register(r'carouselart', CarouselartViewSet)
router.register(r'brands', BrandsViewSet)
router.register(r'products', ProductsViewSet)

urlpatterns = [
    path('', include(router.urls))    
]
