from rest_framework.viewsets import ModelViewSet
from gallery.models import Album, Photo
from .serializers import AlbumSerializer, PhotoSerializer

class AlbumViewSet(ModelViewSet):
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer

class PhotoViewSet(ModelViewSet):
    queryset = Photo.objects.all()
    serializer_class = PhotoSerializer