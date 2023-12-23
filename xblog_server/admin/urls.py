from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('xblog.urls', namespace='xblog')),
    path('api/', include('xblog_api.urls', namespace='xblog_api'))
]
