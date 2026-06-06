from django.http import JsonResponse
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_data(request):

    user = request.user

    data = {
        "id": user.id,
        "email": user.email,
        "first_name": user.first_name,
    }

    return JsonResponse(data)