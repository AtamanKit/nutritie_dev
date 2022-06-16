from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from sales.views import order_email

urlpatterns = [
    path('api/orderemail/', order_email),
    path('api/sales/', include('sales.urls')),

    path('api/auth/', include('djoser.urls')),
    path('api/auth/', include('djoser.urls.jwt')),

    # path('api/token/', TokenObtainPairView.as_view()),

    path('api/accounts/', include('accounts.urls')),

    path('api/nut_app/', include('nut_app.urls')),
    path('api/admin/', admin.site.urls),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
