from django.http import JsonResponse
from django.contrib.auth import get_user_model


def user_data(request):

    user = request.user

    data = {
        "id": user.id,
        "email": user.email,
        "first_name": user.first_name,
    }

    return JsonResponse(data)