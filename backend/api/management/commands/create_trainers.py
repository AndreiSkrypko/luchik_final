from django.core.management.base import BaseCommand
from api.models import Trainer


class Command(BaseCommand):
    help = 'Создает тестовые тренажеры развития'

    def handle(self, *args, **options):
        trainers_data = [
            {
                'title': 'Ментальная арифметика',
                'slug': 'mental-arithmetic',
                'description': 'Программа для тренировки устного счёта. Выбирайте режим и прокачивайте владение числами. Тренировки помогают быстрее выполнять вычисления, удерживать концентрацию и развивать математическую интуицию.',
                'short_description': 'Тренажеры для тренировки устного счёта и развития математических способностей',
                'category': 'math',
                'difficulty': 'intermediate',
                'age_min': 1,
                'age_max': 18,
                'icon': '🔢',
                'order': 1,
            },
            {
                'title': 'Скорочтение',
                'slug': 'speed-reading',
                'description': 'Тренажеры для развития быстрого чтения. Эти упражнения помогают детям удерживать внимание, ускорять восприятие текста и укреплять память. Выберите тренажер и попробуйте вместе с ребенком.',
                'short_description': 'Тренажеры для развития быстрого чтения, внимания и памяти',
                'category': 'language',
                'difficulty': 'intermediate',
                'age_min': 1,
                'age_max': 18,
                'icon': '📚',
                'order': 2,
            },
        ]

        created_count = 0
        updated_count = 0

        for trainer_data in trainers_data:
            trainer, created = Trainer.objects.update_or_create(
                slug=trainer_data['slug'],
                defaults=trainer_data
            )
            if created:
                created_count += 1
                self.stdout.write(
                    self.style.SUCCESS(f'Создан тренажер: {trainer.title}')
                )
            else:
                updated_count += 1
                self.stdout.write(
                    self.style.WARNING(f'Обновлен тренажер: {trainer.title}')
                )

        self.stdout.write(
            self.style.SUCCESS(
                f'\nГотово! Создано: {created_count}, Обновлено: {updated_count}'
            )
        )

