from .models import QuestionsModel, AnswersModel
from .serializers import QuestionSerializer, AnswersSerializer
from .permissions import IsReadOnly

from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

class QuestionViewSet(viewsets.ModelViewSet):

    queryset = QuestionsModel.objects.all()
    serializer_class = QuestionSerializer

    permission_classes = (IsReadOnly,)


class AnswerViewSet(viewsets.ModelViewSet):
        
    queryset = AnswersModel.objects.all()
    serializer_class = AnswersSerializer

    permission_classes = (IsReadOnly,)
    
    