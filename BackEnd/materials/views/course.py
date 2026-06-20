from ..forms.course import ApplyCourse
from config.models import Course
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

@api_view(['POST'])
def CreateCourse(request):
        course_form = ApplyCourse(request.data, request.FILES)

        if course_form.is_valid():
            course = course_form.save(commit=False)
            course.owner = request.user
            course.save()

            return Response({'status': 'ok', 'id': course.id}, status=status.HTTP_201_CREATED)

        return Response({'errors': course_form.errors}, status=status.HTTP_400_BAD_REQUEST)
        
def GetCourseData(request):
    if request.method == 'GET':
        course_ids = UserCourse.objects.filter(
            user = request.user
        ).values_list('course_id', flat=True)

        courses = Course.objects.filter(id__in=course_ids)

        data = [
            {
                'id': course.id,
                'title': course.title,
                'description': course.description,
                'cover': request.build_absolute_uri(course.cover.url) if course.cover else None,
            }
            for course in courses
        ]

        return Response({'courses': data})
    
