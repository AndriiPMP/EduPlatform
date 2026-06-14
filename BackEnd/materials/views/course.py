from forms.course import ApplyCourse
from django.http import JsonResponse
from config.models import Course, UserCourse

def CreateCourse(request):
    if request.method == 'POST':
        course_form = ApplyCourse(request.POST, request.FILES)

        if course_form.is_valid():
            course = course_form.save(commit=False)
            course.owner = request.user
            course.save()

            return JsonResponse({'status': 'ok'})

        return JsonResponse({'errors': course_form.errors}, status = 400)
        
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

        return JsonResponse({'courses': data})
    
