from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def formulario(request):
     return render(
        request,
        'formulario/formulario.html'
    )