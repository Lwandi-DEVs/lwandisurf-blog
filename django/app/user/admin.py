import csv

from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.forms import UserChangeForm, UserCreationForm
from .models import User


# Register your models here.
class UserAdmin(BaseUserAdmin):
    add_form = UserCreationForm
    add_fieldsets = (
        (None, {
            'fields': ('name', 'username', 'email', 'password1', 'password2')
        }),
    )

    search_fields = ['name', 'username']
    form = UserChangeForm
    fieldsets = (
        (None, {
            'fields': ('username', 'password', 'email')
        }),
        ('Informações Básicas', {
            'fields': ('name', 'last_login')
        }),
        (
            'Permissões', {
                'fields': (
                    'is_active', 'is_staff', 'groups',
                )
            }
        ),
    )
    list_display = ['name', 'username', 'email', 'is_active', 'is_staff', 'date_joined']
    ordering = ['name', 'date_joined']
    list_filter = ['groups', 'is_active', 'is_staff', 'is_superuser']


admin.site.register(User, UserAdmin)
