from django.urls import path, include
from rest_framework import routers
from .views import CategoriesViewSet, RemediesViewSet, BrandsViewSet, ProductsViewSet, ArticlefeatViewSet, ArticlecollectionViewSet, ArticlelastViewSet

router = routers.DefaultRouter()
router.register(r'categories', CategoriesViewSet)
router.register(r'remedies', RemediesViewSet, basename='remedies')
router.register(r'articlelasts', ArticlelastViewSet, basename='articlelasts')
router.register(r'articlecollections', ArticlecollectionViewSet)
router.register(r'articlefeats', ArticlefeatViewSet)
router.register(r'brands', BrandsViewSet)
router.register(r'products', ProductsViewSet, basename='products')

urlpatterns = [
    path('', include(router.urls))
]
