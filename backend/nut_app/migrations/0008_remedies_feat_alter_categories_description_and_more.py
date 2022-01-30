# Generated by Django 4.0.1 on 2022-01-30 13:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('nut_app', '0007_alter_categories_image_desc'),
    ]

    operations = [
        migrations.CreateModel(
            name='Remedies_feat',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, unique=True)),
                ('feat_text', models.TextField()),
                ('image_desc', models.ImageField(upload_to='nut_app/media/remedies')),
            ],
        ),
        migrations.AlterField(
            model_name='categories',
            name='description',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='categories',
            name='image_desc',
            field=models.ImageField(upload_to='nut_app/media/categories/'),
        ),
    ]