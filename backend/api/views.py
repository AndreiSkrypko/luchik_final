from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


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

