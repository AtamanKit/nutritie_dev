# Generated by Django 4.0.1 on 2022-02-11 20:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('nut_app', '0047_alter_products_contraindications_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='articlefeat',
            name='title',
        ),
        migrations.AddField(
            model_name='remedies',
            name='category',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='nut_app.articlecollection'),
        ),
    ]
