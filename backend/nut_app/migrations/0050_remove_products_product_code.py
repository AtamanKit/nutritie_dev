# Generated by Django 4.0.1 on 2022-04-16 07:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('nut_app', '0049_rename_contraindications_products_content'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='products',
            name='product_code',
        ),
    ]
