# Generated by Django 2.2.28 on 2024-10-15 13:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jobs', '0002_auto_20241015_2213'),
    ]

    operations = [
        migrations.AddField(
            model_name='joboffer',
            name='job_city',
            field=models.CharField(default='unknown', max_length=100),
            preserve_default=False,
        ),
    ]
