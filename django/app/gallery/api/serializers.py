from rest_framework.serializers import ModelSerializer
from gallery.models import Album, Photo

class AlbumSerializer(ModelSerializer):
    class Meta:
        model = Album
        fields = ('id', 'name', 'description', 'created', 'updated')

class PhotoSerializer(ModelSerializer):
    class Meta:
        model = Photo
        fields = ('id', 'album_fk', 'path', 'name', 'created', 'updated')