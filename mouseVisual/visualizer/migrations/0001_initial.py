# Generated by Django 5.0.4 on 2024-04-30 15:12

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='MouseClick',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('x', models.IntegerField()),
                ('y', models.IntegerField()),
                ('image', models.ImageField(upload_to='mouse_clicks/')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
