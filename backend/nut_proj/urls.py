from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from sales.views import order_email

urlpatterns = [
    path('orderemail/', order_email),
    path('sales/', include('sales.urls')),

    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),

    # path('api/token/', TokenObtainPairView.as_view()),

    path('accounts/', include('accounts.urls')),

    path('nut_app/', include('nut_app.urls')),
    path('admin/', admin.site.urls),
]

print(settings.DEBUG)

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
