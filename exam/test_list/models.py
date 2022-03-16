from statistics import mode
from django.db import models

# Create your models here.

class QuestionsModel(models.Model):
    question_text = models.TextField()
    have_image = models.BooleanField()
    image_number = models.CharField(max_length=50)
    
    class Meta:
        db_table = 'questions'

    def __str__(self):
        return self.question_text


class AnswersModel(models.Model):
    question = models.ForeignKey(QuestionsModel, related_name='answers', on_delete=models.CASCADE)
    answer = models.CharField(max_length=255)
    is_True = models.BooleanField()

    class Meta:
        db_table = 'answers'
    
    def __str__(self):
        return self.answer