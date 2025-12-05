from rest_framework import serializers
from .models import Trainer


class ProgramSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    title = serializers.CharField()
    description = serializers.CharField()


class TrainerSerializer(serializers.ModelSerializer):
    """
    Сериализатор для тренажеров развития
    """
    category_display = serializers.CharField(source='get_category_display', read_only=True)
    difficulty_display = serializers.CharField(source='get_difficulty_display', read_only=True)
    image_url = serializers.SerializerMethodField()
    
    class Meta:
        model = Trainer
        fields = [
            'id',
            'title',
            'slug',
            'description',
            'short_description',
            'category',
            'category_display',
            'difficulty',
            'difficulty_display',
            'age_min',
            'age_max',
            'icon',
            'image',
            'image_url',
            'is_active',
            'order',
            'created_at',
            'updated_at',
        ]
        read_only_fields = ['id', 'created_at', 'updated_at']
    
    def get_image_url(self, obj):
        if obj.image:
            request = self.context.get('request')
            if request:
                return request.build_absolute_uri(obj.image.url)
            return obj.image.url
        return None


class TrainerListSerializer(serializers.ModelSerializer):
    """
    Упрощенный сериализатор для списка тренажеров
    """
    category_display = serializers.CharField(source='get_category_display', read_only=True)
    difficulty_display = serializers.CharField(source='get_difficulty_display', read_only=True)
    image_url = serializers.SerializerMethodField()
    
    class Meta:
        model = Trainer
        fields = [
            'id',
            'title',
            'slug',
            'short_description',
            'category',
            'category_display',
            'difficulty',
            'difficulty_display',
            'age_min',
            'age_max',
            'icon',
            'image_url',
            'order',
        ]
    
    def get_image_url(self, obj):
        if obj.image:
            request = self.context.get('request')
            if request:
                return request.build_absolute_uri(obj.image.url)
            return obj.image.url
        return None

