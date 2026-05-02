from django.contrib.auth import login, logout
from django.shortcuts import redirect, render
from .forms import CustomUserForm, CustomAuthentificationForm

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

        user_form = CustomAuthentificationForm(request.POST)
        
        if user_form.is_valid():
            identifier = user_form.cleaned_data['identifier']
            password = user_form.cleaned_data['password']

            user = CustomUserForm.objects.filter(nick_name=identifier).first()

            if not user:
                user = CustomUserForm.objects.filter(email=identifier).first()

            if user and user.check_password(password):
                login(request, user)
                return redirect('home')
        else:
            user_form = CustomAuthentificationForm()
    
    return render(request, 'authorization/login.html', {'form': user_form})

def logout_view(request):
    logout(request)
    return redirect('home')