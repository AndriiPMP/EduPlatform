from django.urls import path
from .views import user_data

urlpatterns = [
    path('get_user/', user_data, name = 'user_data')
]