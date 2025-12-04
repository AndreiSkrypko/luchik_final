from django.urls import path
from . import views

app_name = 'api'

urlpatterns = [
    path('', views.api_root, name='api-root'),
    path('home/', views.home_data, name='home-data'),
]

