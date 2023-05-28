from django.contrib import admin
from django.urls import path, include

urlpatterns = [

	path('admin/', admin.site.urls),
	##### user related path##########################
	path('', include('user.urls')),
    path("accounts/", include('allauth.urls'))
]