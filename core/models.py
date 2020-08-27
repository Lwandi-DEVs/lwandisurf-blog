from django.db import models


# Create your models here.
class Lwandisurf(models.Model):
    about = models.TextField('Sobre', blank=True, null=True)
    history = models.TextField('História', blank=True, null=True)
    values = models.TextField('Valores', blank=True, null=True)

    class Meta:
        verbose_name = 'Lwandisurf'
        verbose_name_plural = 'Lwandisurf'
