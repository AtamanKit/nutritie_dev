from django.db import models

class Categorii(models.Model):
    title = models.CharField(max_length=30)
    description = models.TextField(max_length=255)
    image_desc = models.ImageField(upload_to='cars')

    def __str__(self):
        return self.title
