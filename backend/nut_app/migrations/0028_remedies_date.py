# Generated by Django 4.0.1 on 2022-02-05 13:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('nut_app', '0027_alter_brands_options_alter_categories_options_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='remedies',
            name='date',
            field=models.DateTimeField(null=True),
        ),
    ]
