from django.db import models
from django.core.exceptions import ValidationError

class Categories(models.Model):
    title = models.CharField(max_length=30, unique=True)
    description = models.TextField(max_length=255)
    image_desc = models.ImageField(upload_to='nut_app/media')

    def clean(self):
        if self.image_desc.width != 366 or \
            self.image_desc.height != 160:
            raise ValidationError("Dimensiunile imaginii trebuie sa corespunda 366x160px")

    def __str__(self):
        return self.title
