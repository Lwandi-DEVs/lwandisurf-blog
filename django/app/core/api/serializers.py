from rest_framework.serializers import ModelSerializer
from core.models import Lwandisurf

class LwandisurfSerializer(ModelSerializer):
    class Meta:
        model = Lwandisurf
        fields = ('about', 'history', 'values')