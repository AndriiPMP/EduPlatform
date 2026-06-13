from django import forms
from config.models import Course

class ApplyCourse(forms.ModelForm):
    
    class Meta:
        model = Course
        fields = ['title', 'description']

    def clean(self):
        cleaned_data = super().clean()
        title = cleaned_data.get('title')
        description = cleaned_data.get('description')

        if title == description:
            raise forms.ValidationError('Title and description must differ')
        
        return cleaned_data
        



    