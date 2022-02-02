# Generated by Django 4.0.1 on 2022-02-02 10:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('nut_app', '0013_products'),
    ]

    operations = [
        migrations.AddField(
            model_name='products',
            name='administration',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='products',
            name='brand',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='nut_app.brands'),
        ),
        migrations.AddField(
            model_name='products',
            name='ingredients',
            field=models.TextField(null=True),
        ),
    ]
