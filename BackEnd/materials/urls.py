from django.urls import path
from .views.course import CreateCourse, GetCourseData

urlpatterns = [
    path('create_course/', CreateCourse, name = 'create_course'),
    path('get_course_data/', GetCourseData, name = 'get_course_data')
]