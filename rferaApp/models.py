from django.db import models
from django.utils.translation import gettext_lazy as _


class DomainEntity(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Device(DomainEntity):
    name = models.CharField(max_length=120)
    device_id = models.IntegerField(default=0)

    class CHOOSEDEVICE(models.TextChoices):
        ACTIVE = 'active', _('active')
        INACTIVE = 'inactive', _('inactive')

    device_type = models.CharField(max_length=10, choices=CHOOSEDEVICE.choices, default=CHOOSEDEVICE.ACTIVE)

    def __str__(self):
        return self.name[:30]
