from rest_framework.routers import DefaultRouter

router = DefaultRouter()

from .views import DeviceViewSet

router.register('device', DeviceViewSet)

urlpatterns = router.urls
