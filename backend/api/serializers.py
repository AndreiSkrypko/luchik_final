from rest_framework import serializers


class ProgramSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    title = serializers.CharField()
    description = serializers.CharField()

