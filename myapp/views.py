
# views.py
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User



def index(request):
    return render(request, 'myapp/index.html')


def user_login(request):
    if request.method == "POST":
        email = request.POST["email"]
        password = request.POST["password"]
        try:
            user = User.objects.get(email=email)  # Wyszukiwanie użytkownika po e-mailu
            user = authenticate(request, username=user.username, password=password)
            if user is not None:
                login(request, user)
                return redirect('index')
        except User.DoesNotExist:
            pass
        return redirect('login')
    else:
        return render(request, 'myapp/login.html', {})


def register(request):
    return render(request, 'myapp/register.html')



def user(request):
    return render(request, 'myapp/user.html', {'user': request.user})



# myapp/views.py
from django.contrib.auth import logout
from django.shortcuts import redirect

def user_logout(request):
    logout(request)  # Wylogowuje użytkownika
    return redirect('login')  # Przekierowanie na stronę logowania po wylogowaniu


