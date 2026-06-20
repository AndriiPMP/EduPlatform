from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    nick_name = models.CharField(max_length=30)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.EmailField(null=True)

class Course(models.Model):
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    cover = models.ImageField(upload_to='course_covers/', blank=True, null=True)
    
class CourseEnrollment(models.Model):
    user_id = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    course_id = models.ForeignKey(Course, on_delete=models.CASCADE)
    role = models.CharField()
    status = models.CharField()

class Lesson(models.Model):
    corse_id = models.ForeignKey(Course, on_delete=models.CASCADE)
    position = models.PositiveIntegerField()
    title = models.CharField(max_length=255)

