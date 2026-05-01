from django import forms
from config.models import Person

class ProfileForm(forms.ModelForm):
    class Meta:
        model = ProfileForm
        fields = [nick_name, first_name, last_name, password]
    