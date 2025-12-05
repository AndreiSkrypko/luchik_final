from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

app_name = 'api'

# Создаем router для ViewSet
router = DefaultRouter()
router.register(r'trainers', views.TrainerViewSet, basename='trainer')

urlpatterns = [
    path('', views.api_root, name='api-root'),
    path('home/', views.home_data, name='home-data'),
    path('', include(router.urls)),
]

