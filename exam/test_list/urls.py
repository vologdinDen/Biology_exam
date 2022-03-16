from rest_framework import routers
from .api import QuestionViewSet, AnswerViewSet
from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns


router = routers.DefaultRouter()
router.register('question', QuestionViewSet)
router.register('answer', AnswerViewSet)

urlpatterns = router.urls