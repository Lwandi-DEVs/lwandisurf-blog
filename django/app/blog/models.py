from django.db import models


# Create your models here.
from user.models import User


class Post(models.Model):
    cover = models.ImageField('Capa', upload_to='covers')
    title = models.CharField('Título', max_length=50)
    content = models.TextField('Conteúdo')
    author = models.ForeignKey(User, on_delete=models.PROTECT)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Post'
        verbose_name_plural = 'Posts'

    def __str__(self):
        return self.title