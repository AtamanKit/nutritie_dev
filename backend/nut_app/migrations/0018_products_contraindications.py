# Generated by Django 4.0.1 on 2022-02-02 10:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('nut_app', '0017_alter_products_product_cod'),
    ]

    operations = [
        migrations.AddField(
            model_name='products',
            name='contraindications',
            field=models.TextField(blank=True, null=True),
        ),
    ]
