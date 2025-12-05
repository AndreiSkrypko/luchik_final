from django.contrib import admin
from .models import Trainer


@admin.register(Trainer)
class TrainerAdmin(admin.ModelAdmin):
    list_display = [
        'title',
        'category',
        'difficulty',
        'age_min',
        'age_max',
        'is_active',
        'order',
        'created_at',
    ]
    list_filter = [
        'category',
        'difficulty',
        'is_active',
        'created_at',
    ]
    search_fields = [
        'title',
        'description',
        'short_description',
    ]
    prepopulated_fields = {'slug': ('title',)}
    ordering = ['order', 'created_at']
    readonly_fields = ['created_at', 'updated_at']
    
    fieldsets = (
        ('Основная информация', {
            'fields': ('title', 'slug', 'description', 'short_description')
        }),
        ('Классификация', {
            'fields': ('category', 'difficulty', 'age_min', 'age_max')
        }),
        ('Медиа', {
            'fields': ('icon', 'image')
        }),
        ('Настройки', {
            'fields': ('is_active', 'order')
        }),
        ('Даты', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )

