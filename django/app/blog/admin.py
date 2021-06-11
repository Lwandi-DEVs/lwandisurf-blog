from django.contrib import admin
from django_summernote.admin import SummernoteModelAdmin

from blog.models import Post


class PostAdmin(SummernoteModelAdmin):
    list_display = ['title', 'author', 'created', 'updated']
    list_filter = ['author', 'created', 'updated']
    summernote_fields = 'content'
    autocomplete_fields = ['author']

admin.site.register(Post, PostAdmin)
