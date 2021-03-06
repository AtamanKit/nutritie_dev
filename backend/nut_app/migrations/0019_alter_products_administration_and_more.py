# Generated by Django 4.0.1 on 2022-02-02 10:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('nut_app', '0018_products_contraindications'),
    ]

    operations = [
        migrations.AlterField(
            model_name='products',
            name='administration',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='products',
            name='description',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='products',
            name='image_desc',
            field=models.ImageField(blank=True, upload_to='nut_app/media/products'),
        ),
        migrations.AlterField(
            model_name='products',
            name='ingredients',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='products',
            name='price',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
