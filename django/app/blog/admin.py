from django.contrib import admin
from django_summernote.admin import SummernoteModelAdmin

from blog.models import Post


class PostAdmin(SummernoteModelAdmin):
    summernote_fields = 'content'
    autocomplete_fields = ['author']



admin.site.register(Post, PostAdmin)
