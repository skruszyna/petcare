# myapp/urls.py
from django.urls import path 
from . import views

urlpatterns = [
    path('', views.index, name='index'),  # Strona główna
    path('login/', views.user_login, name='login'),
    path('register/', views.register, name='register'),
    path('user/', views.user, name='user'),
    path('logout/', views.user_logout, name='logout'),
]
