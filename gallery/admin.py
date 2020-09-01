from django.contrib import admin

from gallery.models import Album, Photo


class PhotoInlines(admin.TabularInline):
    model = Photo


class AlbumAdmin(admin.ModelAdmin):
    inlines = (PhotoInlines, )


admin.site.register(Album, AlbumAdmin)
