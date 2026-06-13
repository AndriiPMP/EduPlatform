from forms.course import ApplyCourse
from django.http import JsonResponse

def CreateCourse(request):
    if request.method == 'POST':
        course_form = ApplyCourse(request.POST, request.FILES)

        if course_form.is_valid():
            course = course_form.save(commit=False)
            course.owner = request.user
            course.save()

            return JsonResponse({'status': 'ok'})

        return JsonResponse({'errors': course_form.errors}, status = 400)
        
