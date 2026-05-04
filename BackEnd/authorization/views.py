from django.contrib.auth import login, logout
from django.shortcuts import redirect, render
from .forms import CustomUserForm, CustomAuthentificationForm
from rest_framework_simplejwt.tokens import RefreshToken
from django.http import JsonResponse


def register_view(request):
    if request.method == 'POST':
        user_form = CustomUserForm(request.POST)

        if user_form.is_valid():
            user = user_form.save()
            user.set_password(user_form.cleaned_data['password1'])
            user.save()
            refresh = RefreshToken.for_user(user)

            response = JsonResponse({
                "access": str(refresh.access_token),
                })
            
            response.set_cookie(
                key="refresh_token",
                value=str(refresh),
                httponly=True,
                secure=True,   
                samesite="Lax",
                path="/",
            )

            return response
        
        return JsonResponse({"error": "Invalid form"}, status=400)

    return JsonResponse({"error": "Method not allowed"}, status=405)


def login_view(request):
    if request.method == 'POST':

        user_form = CustomAuthentificationForm(request.POST)
        
        if user_form.is_valid():
            identifier = user_form.cleaned_data['identifier']
            password = user_form.cleaned_data['password']

            user = CustomUserForm.objects.filter(nick_name=identifier).first()

            if not user:
                user = CustomUserForm.objects.filter(email=identifier).first()

            if user and user.check_password(password):
                refresh = RefreshToken.for_user(user)

            response = JsonResponse({
                    "access": str(refresh.access_token),
                })
            
            response.set_cookie(
                key="refresh_token",
                value=str(refresh),
                httponly=True,
                secure=True,   
                samesite="Lax",
                path="/",
                )

            return response
        
        return JsonResponse({"error": "Invalid credentials"}, status=400)

    return JsonResponse({"error": "Method not allowed"}, status=405)    

def logout_view(request):
    logout(request)
    return redirect('home')