from django.shortcuts import render
from django.http import HttpResponse
from .models import Auto
from .forms import AutoForm

# Create your views here.
def agregarAuto(request):
    
    context = {
        'titulo':'Agregar Auto'
    }
    return render(
        request,
        'auto/agregar.html',
        context
    )

def eliminarAuto(request):
    context = {
        'titulo':'Eliminar Auto'
    }
    return render(
        request,
        'auto/eliminar.html',
        context
    )

def modificarAuto(request):
    context = {
        'titulo':'Modificar Auto'
    }
    return render(
        request,
        'auto/modificar.html',
        context
    )

def listarAutos(request):
    context = {
        'titulo':'Listar Auto'
    }
    return render(
        request,
        'auto/listar.html',
        context
    )