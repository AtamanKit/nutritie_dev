# Generated by Django 4.0.1 on 2022-02-10 16:57

import ckeditor.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('nut_app', '0044_alter_products_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='products',
            name='description',
            field=ckeditor.fields.RichTextField(blank=True),
        ),
    ]
