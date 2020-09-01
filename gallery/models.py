from django.db import models


class Album(models.Model):
    name = models.CharField('Nome', max_length=50)
    description = models.TextField('Descrição')
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Album'
        verbose_name_plural = 'Albuns'
        ordering = ['-created']

    def __str__(self):
        return self.name


class Photo(models.Model):
    album_fk = models.ForeignKey(Album, on_delete=models.CASCADE)
    path = models.ImageField('Caminho', upload_to='gallery')
    name = models.CharField('Nome', max_length=50)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Foto'
        verbose_name_plural = 'Fotos'
        ordering = ['-created']

    def __str__(self):
        return self.name


