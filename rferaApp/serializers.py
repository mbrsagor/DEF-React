from rest_framework.serializers import ModelSerializer
from .models import Device


class DeviceSerializer(ModelSerializer):
    class Meta:
        model = Device
        fields = [
            'id', 'name', 'device_id', 'device_type', 'created_at', 'updated_at'
        ]
