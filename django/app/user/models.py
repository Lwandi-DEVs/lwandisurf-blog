from django.db import models
from django.contrib.auth.models import PermissionsMixin, AbstractBaseUser, UserManager
from django.core import validators

import re


# Create your models here.
class User(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(
        'Usuário', max_length=30, unique=True, validators=[
            validators.RegexValidator(
                re.compile('^[\w.@+-]+$'),
                'Informe um nome de usuário válido. '
                'Este valor deve conter apenas letras, números '
                'e os caracteres: @/./+/-/_ .'
                , 'invalid'
            )
        ], help_text='Um nome curto que será usado para identificá-lo de forma única na plataforma'
    )
    email = models.EmailField('E-mail', blank=True, null=True)
    is_staff = models.BooleanField('Staff', default=False)
    is_active = models.BooleanField('Ativo', default=True)
    date_joined = models.DateTimeField('Data de Entrada', auto_now_add=True)

    ### NOVAS DEFINIÇÕES
    name = models.CharField('Nome', max_length=150)

    def usuarios(self, filename):
        return 'usuarios/' + str(self.username) + '.' + filename.split('.')[-1]

    avatar = models.ImageField('Imagem de Perfil', upload_to=usuarios, blank=True, null=True)
    ####


    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['name', 'email']

    objects = UserManager()

    class Meta:
        verbose_name = 'Usuário'
        verbose_name_plural = 'Usuários'

    def __str__(self):
        return self.username

    def get_full_name(self):
        return str(self)

    def get_short_name(self):
        return str(self).split(" ")[0]
