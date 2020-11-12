from rest_framework.serializers import ModelSerializer
from user.models import User


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'name',
                  'is_staff', 'is_active', 'date_joined')
