from django.contrib import admin
from .models import QuestionsModel, AnswersModel
# Register your models here.

class AdminQuestions(admin.ModelAdmin):
    list_display = ('id', 'question_text', 'have_image', 'image_number')
    list_display_links = ('id',)
    search_fields = ('id',)

class AdminAnswers(admin.ModelAdmin):
    list_display = ('id', 'question_id', 'answer', 'is_True')
    list_display_links = ('id',)
    search_fields = ('id',)

admin.site.register(QuestionsModel, AdminQuestions)
admin.site.register(AnswersModel, AdminAnswers)