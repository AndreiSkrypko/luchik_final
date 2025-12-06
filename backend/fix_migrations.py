import sqlite3
import os

db_path = 'db.sqlite3'

if os.path.exists(db_path):
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    # Удаляем запись о миграции api
    cursor.execute("DELETE FROM django_migrations WHERE app = 'api'")
    conn.commit()
    print("Удалена запись о миграции api")
    
    conn.close()
    print("Готово! Теперь запустите: python manage.py migrate api")
else:
    print(f"База данных {db_path} не найдена")

