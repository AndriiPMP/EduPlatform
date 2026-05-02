from django.contrib.auth import login, logout
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm
from django.shortcuts import redirect, render
from .forms import CustomUserForm

def register_view(request):
    if request.method == 'POST':
        user_form = CustomUserForm(request.POST)

        if user_form.is_valid():
            user = user_form.save()
            user.set_password(user_form.cleaned_data['password1'])
            login(request, user_form)
            return redirect('home')
    else:
        user_form = CustomUserForm()

    return render(request, 'authorization/register.html', {'form': user_form})

def login_view(request):
    if request.method == 'POST':
        user_form = AuthenticationForm(request, data=request.POST)
        if user_form.is_valid():
            user = user_form.get_user()
            login(request, user)
            return redirect('home')
    else:
        user_form = AuthenticationForm(request)
    
    return render(request, 'authorization/login.html', {'form': user_form})

def logout_view(request):
    logout(request)
    return redirect('home')