# Generated by Django 4.0.3 on 2022-03-07 09:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('test_list', '0005_alter_questions_table'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='answers',
            new_name='AnswersModel',
        ),
        migrations.RenameModel(
            old_name='questions',
            new_name='QuestionsModel',
        ),
    ]
