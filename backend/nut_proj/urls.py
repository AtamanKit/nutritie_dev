from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('nut_app/', include('nut_app.urls')),
    path('admin/', admin.site.urls),
]
