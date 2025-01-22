# klinika/urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),  # Panel administracyjny
    path('', include('myapp.urls')),  # Włączenie URL-i z aplikacji 'myapp'
]
