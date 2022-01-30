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
