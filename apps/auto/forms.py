from django import forms
from .models import Auto, PerfilAuto

class AutoForm(forms.ModelForm):
    class Meta:
        model = Auto
        fields = ('nombre', 'modelo', 'marca', 'detalle', 'año', 'precio')

class PerfilAutoForm(forms.ModelForm):
    class Meta:
        model = PerfilAuto
        fields = ('imagenAuto', )
