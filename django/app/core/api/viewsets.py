from rest_framework.viewsets import ModelViewSet
from core.models import Lwandisurf
from .serializers import LwandisurfSerializer

class LwandisurfViewSet(ModelViewSet):
    queryset = Lwandisurf.objects.all()
    serializer_class = LwandisurfSerializer