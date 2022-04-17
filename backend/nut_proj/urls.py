from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from accounts.views import purchase_email

# from rest_framework_simplejwt.views import (
#     TokenObtainPairView,
    # TokenRefreshView,
# )


urlpatterns = [
    path('purchase/', purchase_email),

    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),

    # path('api/token/', TokenObtainPairView.as_view()),

    path('accounts/', include('accounts.urls')),

    path('nut_app/', include('nut_app.urls')),
    path('admin/', admin.site.urls),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
