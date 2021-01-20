from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from gallery.models import Album, Photo
from .serializers import AlbumSerializer, PhotoSerializer

class AlbumViewSet(ModelViewSet):
    queryset = Album.objects.order_by('-id').all()
    serializer_class = AlbumSerializer
    permission_classes = (IsAuthenticated,)
    authentication_classes = (TokenAuthentication,)

class PhotoViewSet(ModelViewSet):
    queryset = Photo.objects.all()
    serializer_class = PhotoSerializer
    permission_classes = (IsAuthenticated,)
    authentication_classes = (TokenAuthentication,)