from django.db import models
from django.utils import timezone


class Trainer(models.Model):
    """
    Модель тренажера развития
    """
    DIFFICULTY_CHOICES = [
        ('beginner', 'Начальный'),
        ('intermediate', 'Средний'),
        ('advanced', 'Продвинутый'),
    ]
    
    CATEGORY_CHOICES = [
        ('memory', 'Память'),
        ('attention', 'Внимание'),
        ('logic', 'Логика'),
        ('creativity', 'Творчество'),
        ('math', 'Математика'),
        ('language', 'Язык'),
    ]
    
    title = models.CharField(
        max_length=200,
        verbose_name='Название тренажера'
    )
    slug = models.SlugField(
        max_length=200,
        unique=True,
        verbose_name='URL-адрес'
    )
    description = models.TextField(
        verbose_name='Описание'
    )
    short_description = models.CharField(
        max_length=300,
        blank=True,
        verbose_name='Краткое описание'
    )
    category = models.CharField(
        max_length=50,
        choices=CATEGORY_CHOICES,
        verbose_name='Категория'
    )
    difficulty = models.CharField(
        max_length=20,
        choices=DIFFICULTY_CHOICES,
        default='beginner',
        verbose_name='Уровень сложности'
    )
    age_min = models.IntegerField(
        default=1,
        verbose_name='Минимальный возраст'
    )
    age_max = models.IntegerField(
        default=18,
        verbose_name='Максимальный возраст'
    )
    icon = models.CharField(
        max_length=100,
        blank=True,
        verbose_name='Иконка'
    )
    image = models.ImageField(
        upload_to='trainers/',
        blank=True,
        null=True,
        verbose_name='Изображение'
    )
    is_active = models.BooleanField(
        default=True,
        verbose_name='Активен'
    )
    order = models.IntegerField(
        default=0,
        verbose_name='Порядок сортировки'
    )
    created_at = models.DateTimeField(
        auto_now_add=True,
        verbose_name='Дата создания'
    )
    updated_at = models.DateTimeField(
        auto_now=True,
        verbose_name='Дата обновления'
    )
    
    class Meta:
        verbose_name = 'Тренажер'
        verbose_name_plural = 'Тренажеры'
        ordering = ['order', 'created_at']
        indexes = [
            models.Index(fields=['slug']),
            models.Index(fields=['category']),
            models.Index(fields=['is_active']),
        ]
    
    def __str__(self):
        return self.title

