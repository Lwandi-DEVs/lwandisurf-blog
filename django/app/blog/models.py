from django.db import models
from user.models import User
from django.utils.text import slugify

from gdstorage.storage import GoogleDriveStorage

gd_storage = GoogleDriveStorage()


class Post(models.Model):
    cover = models.ImageField('Capa', upload_to='covers', storage=gd_storage)
    title = models.CharField('Título', max_length=50, unique=True)
    slug = models.SlugField('Slug', max_length=50, unique=True, null=True, blank=True,
                            help_text='Esse campo é calculado automaticamente, pode deixar em branco')
    content = models.TextField('Conteúdo')
    author = models.ForeignKey(User, on_delete=models.PROTECT)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Post'
        verbose_name_plural = 'Posts'

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(Post, self).save(*args, **kwargs)
