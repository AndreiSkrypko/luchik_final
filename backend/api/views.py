from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import action
from django.shortcuts import get_object_or_404
from .models import Trainer
from .serializers import TrainerSerializer, TrainerListSerializer


@api_view(['GET'])
def api_root(request):
    """
    API root endpoint
    """
    return Response({
        'message': 'Kids Center API',
        'version': '1.0',
        'endpoints': {
            'home': '/api/home/',
            'trainers': '/api/trainers/',
        }
    })


@api_view(['GET'])
def home_data(request):
    """
    Главная страница - данные
    """
    data = {
        'title': 'Добро пожаловать в детский центр',
        'subtitle': 'Развитие, творчество и радость для ваших детей',
        'programs': [
            {
                'id': 1,
                'title': 'Развивающие занятия',
                'description': 'Программа для развития мышления и творческих способностей',
            },
            {
                'id': 2,
                'title': 'Творческие мастерские',
                'description': 'Рисование, лепка и другие виды творчества',
            },
            {
                'id': 3,
                'title': 'Спортивные секции',
                'description': 'Физическое развитие и активные игры',
            },
        ],
        'features': [
            'Опытные педагоги',
            'Современное оборудование',
            'Индивидуальный подход',
            'Безопасная среда',
        ],
        'contact': {
            'phone': '+7 (XXX) XXX-XX-XX',
            'email': 'info@kidscenter.ru',
            'address': 'г. Москва, ул. Примерная, д. 1',
        },
    }
    return Response(data, status=status.HTTP_200_OK)


class TrainerViewSet(ModelViewSet):
    """
    ViewSet для работы с тренажерами развития
    """
    queryset = Trainer.objects.filter(is_active=True)
    serializer_class = TrainerSerializer
    
    def get_serializer_class(self):
        if self.action == 'list':
            return TrainerListSerializer
        return TrainerSerializer
    
    def get_queryset(self):
        queryset = Trainer.objects.filter(is_active=True)
        
        # Фильтрация по категории
        category = self.request.query_params.get('category', None)
        if category:
            queryset = queryset.filter(category=category)
        
        # Фильтрация по уровню сложности
        difficulty = self.request.query_params.get('difficulty', None)
        if difficulty:
            queryset = queryset.filter(difficulty=difficulty)
        
        # Фильтрация по возрасту
        age = self.request.query_params.get('age', None)
        if age:
            try:
                age_int = int(age)
                queryset = queryset.filter(age_min__lte=age_int, age_max__gte=age_int)
            except ValueError:
                pass
        
        return queryset.order_by('order', 'created_at')
    
    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, context={'request': request})
        return Response(serializer.data)
    
    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True, context={'request': request})
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def categories(self, request):
        """
        Получить список всех категорий тренажеров
        """
        categories = Trainer.objects.filter(is_active=True).values_list('category', flat=True).distinct()
        category_choices = dict(Trainer.CATEGORY_CHOICES)
        result = [
            {
                'value': cat,
                'label': category_choices.get(cat, cat)
            }
            for cat in categories
        ]
        return Response(result)
    
    @action(detail=False, methods=['get'])
    def by_slug(self, request):
        """
        Получить тренажер по slug
        """
        slug = request.query_params.get('slug', None)
        if not slug:
            return Response(
                {'error': 'Параметр slug обязателен'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        trainer = get_object_or_404(Trainer, slug=slug, is_active=True)
        serializer = self.get_serializer(trainer, context={'request': request})
        return Response(serializer.data)

