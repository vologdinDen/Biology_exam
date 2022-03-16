from rest_framework import serializers
from .models import QuestionsModel, AnswersModel



class AnswersSerializer(serializers.ModelSerializer):
    class Meta:
        model = AnswersModel
        fields = '__all__'


class QuestionSerializer(serializers.ModelSerializer):
    
    answers = AnswersSerializer(many=True, read_only=True)
    
    class Meta:
        model = QuestionsModel
        fields = '__all__'
        depth = 1
