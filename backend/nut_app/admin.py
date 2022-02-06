from django.contrib import admin
from .models import Categories, Remedies, Brands, Products, Carouselart

admin.site.register(Categories)
admin.site.register(Remedies)
admin.site.register(Carouselart)
admin.site.register(Brands)
admin.site.register(Products)
