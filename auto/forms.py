from django import forms
from .models import Auto

class AutoForm(forms.ModelForm):
    class Meta:
        model = Auto
        fields = ['nombre', 'precio', 'detalle', 'anio', 'fecha_ingreso']

