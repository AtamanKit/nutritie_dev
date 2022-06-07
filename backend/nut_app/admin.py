from django.contrib import admin
from .models import Categories, Remedies, Brands, Products, Articlefeat, Articlecollection


class ProductsAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'category', 'brand')
    readonly_fields = ('id',)


class RemediesAdmin(admin.ModelAdmin):
    list_display = ('title', 'category')


class ArticlefeatAdmin(admin.ModelAdmin):
    list_display = ('article',)


admin.site.register(Categories)
admin.site.register(Remedies, RemediesAdmin)
admin.site.register(Articlecollection)
admin.site.register(Articlefeat, ArticlefeatAdmin)
admin.site.register(Brands)
admin.site.register(Products, ProductsAdmin)
