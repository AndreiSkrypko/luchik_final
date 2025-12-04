# Backend - Детский центр «Лучик»

Django REST Framework API для детского центра "Лучик".

## Установка

1. Создайте виртуальное окружение:
```bash
python -m venv venv
```

2. Активируйте виртуальное окружение:
- Windows: `venv\Scripts\activate`
- Linux/Mac: `source venv/bin/activate`

3. Установите зависимости:
```bash
pip install -r requirements.txt
```

## Запуск

1. Примените миграции:
```bash
python manage.py migrate
```

2. Создайте суперпользователя (опционально):
```bash
python manage.py createsuperuser
```

3. Запустите сервер:
```bash
python manage.py runserver
```

API будет доступно по адресу: http://localhost:8000

## API Endpoints

- `GET /api/` - корень API, информация о доступных endpoints
- `GET /api/home/` - данные для главной страницы

## Структура

- `kidscenter/` - основные настройки Django проекта
- `api/` - приложение с API endpoints
- `api/views.py` - представления API
- `api/urls.py` - маршруты API

## Настройки

Основные настройки находятся в `kidscenter/settings.py`:
- CORS настроен для работы с frontend на localhost:3000
- Язык интерфейса: русский
- Часовой пояс: Europe/Moscow

