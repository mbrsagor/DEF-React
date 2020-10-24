from django.db import models
from django.utils.translation import gettext_lazy as _


class DomainEntity(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Device(DomainEntity):
    name = models.CharField(max_length=120)
    device_id = models.IntegerField(default=0)

    class CHOOSEDEVICE(models.TextChoices):
        TYPE1 = 'type1', _('type1')
        TYPE2 = 'type2', _('type2')
        TYPE3 = 'type3', _('type3')
        TYPE4 = 'type4', _('type4')

    device_type = models.CharField(max_length=10, choices=CHOOSEDEVICE.choices, default=CHOOSEDEVICE.TYPE1)
    status = models.BooleanField(default=True, blank=True)

    def __str__(self):
        return self.name[:30]
