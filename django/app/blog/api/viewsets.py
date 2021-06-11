from django.utils.text import slugify
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication, SessionAuthentication
from blog.models import Post
from .serializers import PostSerializer


class PostViewSet(ModelViewSet):
    queryset = Post.objects.order_by('-id').all()
    serializer_class = PostSerializer
    permission_classes = (IsAuthenticated,)
    authentication_classes = (TokenAuthentication, SessionAuthentication)
    lookup_field = 'slug'

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        responsedata = serializer.data
        post = self.get_object()
        # responsedata['slug'] = slugify(post.title)
        responsedata['author'] = post.author.name
        return Response(responsedata)

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        responsedata = serializer.data
        for obj in responsedata:
            post = Post.objects.get(id=obj['id'])
            # obj['slug'] = slugify(post.title)
            obj['author'] = post.author.name
        return Response(responsedata)
