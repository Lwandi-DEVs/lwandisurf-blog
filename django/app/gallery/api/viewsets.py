from rest_framework.viewsets import ModelViewSet
from rest_framework.filters import OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication, SessionAuthentication
from gallery.models import Album, Photo
from .serializers import AlbumSerializer, PhotoSerializer

class AlbumViewSet(ModelViewSet):
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer
    permission_classes = (IsAuthenticated,)
    authentication_classes = (TokenAuthentication, SessionAuthentication)
    filter_backends = (DjangoFilterBackend, OrderingFilter)
    filterset_fields = ['id', 'created', 'updated', 'name', 'description']
    ordering_fields = ['id', 'created', 'updated', 'name']
    ordering = ['id']


class PhotoViewSet(ModelViewSet):
    queryset = Photo.objects.all()
    serializer_class = PhotoSerializer
    permission_classes = (IsAuthenticated,)
    authentication_classes = (TokenAuthentication, SessionAuthentication)
    filter_backends = (DjangoFilterBackend, OrderingFilter)
    filterset_fields = ['id', 'album_fk', 'created', 'updated', 'name'] 
    ordering_fields = ['id', 'album_fk', 'created', 'updated', 'name']
    ordering = ['id']