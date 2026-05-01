from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    nick_name = models.CharField(max_length=30)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.EmailField(null=True)