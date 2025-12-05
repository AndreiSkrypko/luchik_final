# Тренажеры развития "Лучик"

## Описание

Система тренажеров развития для детей от 1 года до 18 лет. Каждый тренажер хранится в базе данных и доступен через API.

## Структура проекта

### Backend (Django)

- **Модель**: `backend/api/models.py` - модель `Trainer`
- **API**: `backend/api/views.py` - ViewSet для работы с тренажерами
- **Сериализаторы**: `backend/api/serializers.py` - сериализаторы для API
- **URLs**: `backend/api/urls.py` - маршруты API
- **Админка**: `backend/api/admin.py` - админ-панель для управления тренажерами

### Frontend (Next.js)

- **Страница тренажеров**: `frontend/src/app/trainers/page.tsx`
- **Стили**: `frontend/src/app/trainers/page.module.css`

## API Endpoints

### Список тренажеров
```
GET /api/trainers/
```

Параметры фильтрации:
- `category` - категория (memory, attention, logic, creativity, math, language)
- `difficulty` - уровень сложности (beginner, intermediate, advanced)
- `age` - возраст ребенка

Пример:
```
GET /api/trainers/?category=memory&difficulty=beginner&age=5
```

### Детали тренажера
```
GET /api/trainers/{id}/
```

### Получить тренажер по slug
```
GET /api/trainers/by_slug/?slug=trainer-memory-luchik
```

### Список категорий
```
GET /api/trainers/categories/
```

## Управление тренажерами

### Создание тестовых данных

```bash
cd backend
python manage.py create_trainers
```

Эта команда создаст 8 тестовых тренажеров с названием "Лучик" в различных категориях.

### Добавление тренажера через админку

1. Создайте суперпользователя (если еще не создан):
```bash
python manage.py createsuperuser
```

2. Запустите сервер:
```bash
python manage.py runserver
```

3. Откройте админку: http://localhost:8000/admin/
4. Войдите и перейдите в раздел "Тренажеры"
5. Добавьте новый тренажер

## Категории тренажеров

- **memory** - Память
- **attention** - Внимание
- **logic** - Логика
- **creativity** - Творчество
- **math** - Математика
- **language** - Язык

## Уровни сложности

- **beginner** - Начальный
- **intermediate** - Средний
- **advanced** - Продвинутый

## Использование

### Запуск backend

```bash
cd backend
python manage.py migrate
python manage.py runserver
```

### Запуск frontend

```bash
cd frontend
npm install
npm run dev
```

### Переменные окружения

Для frontend создайте файл `.env.local`:

```
NEXT_PUBLIC_API_URL=http://localhost:8000
```

## Структура модели Trainer

- `title` - Название тренажера
- `slug` - URL-адрес (уникальный)
- `description` - Полное описание
- `short_description` - Краткое описание
- `category` - Категория
- `difficulty` - Уровень сложности
- `age_min` - Минимальный возраст
- `age_max` - Максимальный возраст
- `icon` - Иконка (эмодзи или текст)
- `image` - Изображение тренажера
- `is_active` - Активен ли тренажер
- `order` - Порядок сортировки
- `created_at` - Дата создания
- `updated_at` - Дата обновления

## Следующие шаги

1. Создать страницу детального просмотра тренажера (`/trainers/[slug]`)
2. Добавить функционал прохождения тренажеров
3. Добавить систему прогресса и достижений
4. Добавить возможность загрузки изображений для тренажеров

