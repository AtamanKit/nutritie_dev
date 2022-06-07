from django.db import models
from django.core.exceptions import ValidationError
from ckeditor.fields import RichTextField


class Categories(models.Model):
    title = models.CharField(max_length=30, unique=True)
    description = models.TextField()
    image_desc = models.ImageField(upload_to='nut_app/media/categories/')

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

    def clean(self):
        if self.image_desc.width != 863 or \
                self.image_desc.height != 458:
            raise ValidationError("Dimensiunile imaginei trebuie sa corespunda 863x458px")

    def __str__(self):
        return self.title


class Articlecollection(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    image_desc = models.ImageField(upload_to='nut_app/media/articlecollections')

    def clean(self):
        if self.image_desc.width != 863 or \
                self.image_desc.height != 458:
            raise ValidationError("Dimensiunile imaginei trebuie sa corespunda 863x458px")

    def __str__(self):
        return self.title


class Remedies(models.Model):
    title = models.CharField(max_length=255, unique=True)
    text = RichTextField()
    image_desc = models.ImageField(upload_to='nut_app/media/remedies')
    date = models.DateTimeField(null=True)
    category = models.ForeignKey(Articlecollection, on_delete=models.CASCADE, null=True)

    class Meta:
        verbose_name = 'Remedy'
        verbose_name_plural = 'Remedies'

    def clean(self):
        if self.image_desc.width != 863 or \
                self.image_desc.height != 458:
            raise ValidationError("Dimensiunile imaginei trebuie sa corespunda 863x458px")

#    def __str__(self):
#        return self.title


class Articlefeat(models.Model):
    article = models.OneToOneField(Remedies, on_delete=models.CASCADE)


class Brands(models.Model):
    title = models.CharField(max_length=255, unique=True)
    link = models.CharField(max_length=255, blank=True, )
    image_desc = models.ImageField(upload_to='nut_app/media/logos')

    class Meta:
        verbose_name = 'Brand'
        verbose_name_plural = 'Brands'

    def __str__(self):
        return self.title


class Products(models.Model):
    IN_STOCK_CHOICES = [
        ('In stoc', 'In stoc'),
        ('Stoc epuizat', 'Stoc epuizat')
    ]

    title = models.CharField(max_length=255, unique=True)
    description = RichTextField(blank=True)
    administration = RichTextField(null=True, blank=True)
    content = RichTextField(null=True, blank=True)
    ingredients = RichTextField(null=True, blank=True)
    form = models.CharField(max_length=255, null=True, blank=True)
    stock = models.CharField(max_length=20, choices=IN_STOCK_CHOICES, default='in')
    price = models.IntegerField(null=True, blank=True)
    image_desc = models.ImageField(upload_to='nut_app/media/products', blank=True, null=True)
    date = models.DateTimeField()
    category = models.ForeignKey(Categories, on_delete=models.CASCADE)
    brand = models.ForeignKey(Brands, on_delete=models.CASCADE, null=True)

    class Meta:
        verbose_name = 'Product'
        verbose_name_plural = 'Products'

    def clean(self):
        if self.image_desc.width != 1000 or \
                self.image_desc.height != 1000:
            raise ValidationError("Dimensiunile imaginei trebuie sa corespunda 1000x1000px")

    def __str__(self):
        return self.title
