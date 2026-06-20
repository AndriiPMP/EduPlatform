from django.urls import path
from .views.course import CreateCourse

urlpatterns = [
    path('create_course/', CreateCourse, name = 'create_course')
]