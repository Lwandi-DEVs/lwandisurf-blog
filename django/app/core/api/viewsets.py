from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication, SessionAuthentication
from core.models import Lwandisurf
from .serializers import LwandisurfSerializer

class LwandisurfViewSet(ModelViewSet):
    queryset = Lwandisurf.objects.all()
    serializer_class = LwandisurfSerializer
    permission_classes = (IsAuthenticated,)
    authentication_classes = (TokenAuthentication, SessionAuthentication)