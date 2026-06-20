from rest_framework import serializers
from config.models import Course

class ApplyCourse(serializers.ModelSerializer):
    
    class Meta:
        model = Course
        fields = ['title', 'description', 'cover']
        read_only_fields = ['id']

    def validate(self, data):

        if data.get('title') ==  data.get('description'):
            raise serializers.ValidationError('Title and description must differ')
        
        return data
        



    