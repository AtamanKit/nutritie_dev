from django.db import models
from django.core.exceptions import ValidationError

class Categories(models.Model):
    title = models.CharField(max_length=30, unique=True)
    description = models.TextField()
    image_desc = models.ImageField(upload_to='nut_app/media/categories/')

    def clean(self):
        if self.image_desc.width != 366 or \
            self.image_desc.height != 160:
            raise ValidationError("Dimensiunile imaginii trebuie sa corespunda 366x160px")

    def __str__(self):
        return self.title

class Remedies(models.Model):
    title = models.CharField(max_length=255, unique=True)
    description = models.TextField()
    text = models.TextField()
    image_desc = models.ImageField(upload_to='nut_app/media/remedies')

    def clean(self):
        if self.image_desc.width != 1920 or \
            self.image_desc.height != 494:
            raise ValidationError("Dimensiunile imaginii trebuie sa corespunda 1920x494px")

    def __str__(self):
        return self.title

class Brands(models.Model):
    title = models.CharField(max_length=255, unique=True)
    link = models.CharField(max_length=255, blank=True, )
    image_desc = models.ImageField(upload_to='nut_app/media/logos')

    def __str__(self):
        return self.title

class Products(models.Model):
    IN_STOCK_CHOICES = [
        ('in', 'In stoc'),
        ('out', 'Stoc epuizat')
    ]

    title = models.CharField(max_length=255, unique=True)
    product_code = models.IntegerField(unique=True, blank=False, null=True)
    description = models.TextField(blank=True)
    administration = models.TextField(null=True, blank=True)
    contraindications = models.TextField(null=True, blank=True)
    ingredients = models.TextField(null=True, blank=True)
    form = models.CharField(max_length=255, null=True, blank=True)
    stock = models.CharField(max_length=10, choices=IN_STOCK_CHOICES, default='in')
    price = models.IntegerField(null=True, blank=True)
    image_desc = models.ImageField(upload_to='nut_app/media/products', blank=True, null=True)
    date = models.DateTimeField()
    category = models.ForeignKey(Categories, on_delete=models.CASCADE)
    brand = models.ForeignKey(Brands, on_delete=models.CASCADE, null=True)

    def clean(self):
        if self.image_desc.width != 1000 or \
            self.image_desc.height != 1000:
            raise ValidationError("Dimensiunile imaginii trebuie sa corespunda 1000x1000px")

    def __str__(self):
        return self.title
