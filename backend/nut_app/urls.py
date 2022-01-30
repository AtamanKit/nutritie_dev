from django.urls import path, include
from rest_framework import routers
from .views import CategoriesViewSet, Remedies_featViewSet

router = routers.DefaultRouter()
router.register(r'categories', CategoriesViewSet)
router.register(r'remedies_feat', Remedies_featViewSet)

urlpatterns = [
    path('', include(router.urls))    
]
