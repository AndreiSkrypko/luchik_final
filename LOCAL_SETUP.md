# Локальный запуск проекта

## Быстрый старт

### 1. Frontend (Next.js)

```bash
cd frontend
npm install
npm run dev
```

Frontend будет доступен на: **http://localhost:3000**

### 2. Backend (Django)

В новом терминале:

```bash
cd backend

# Создайте виртуальное окружение (если еще не создано)
python -m venv venv

# Активируйте виртуальное окружение
# Windows:
venv\Scripts\activate
# Linux/Mac:
source venv/bin/activate

# Установите зависимости
pip install -r requirements.txt

# Примените миграции
python manage.py migrate

# Запустите сервер
python manage.py runserver
```

Backend будет доступен на: **http://localhost:8000**

API будет доступно на: **http://localhost:8000/api/**

---

## Переменные окружения (опционально)

Для локальной разработки все настройки работают по умолчанию. Если нужно изменить настройки, создайте файл `.env` в папке `backend/`:

```env
SECRET_KEY=your-local-secret-key
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1
CORS_ALLOWED_ORIGINS=http://localhost:3000,http://127.0.0.1:3000
```

Но это не обязательно - по умолчанию все уже настроено для локальной разработки!

---

## Проверка работы

1. Откройте http://localhost:3000 - должен открыться фронтенд
2. Откройте http://localhost:8000/api/ - должен вернуться JSON с информацией об API
3. Откройте http://localhost:8000/api/home/ - должен вернуться JSON с данными главной страницы

---

## Остановка серверов

Нажмите `Ctrl+C` в терминалах, где запущены серверы.

