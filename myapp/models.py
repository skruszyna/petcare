from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)

    USERNAME_FIELD = 'email'  # Użycie email jako identyfikatora
    REQUIRED_FIELDS = ['username']  # Pole username nadal jest wymagane dla admina
