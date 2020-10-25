from django.contrib import admin
from .models import Device


class DeviceAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'device_id', 'device_type', 'status', 'created_at', 'updated_at']
    list_editable = ['device_id', 'device_type', 'status']
    list_display_links = ['name']
    search_fields = ['name', 'device_id', 'device_type']
    list_filter = ['name']
    list_per_page = 8


admin.site.register(Device, DeviceAdmin)
