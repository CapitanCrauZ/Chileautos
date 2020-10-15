from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Auto
from .forms import AutoForm

# Create your views here.
def agregarAuto(request):
    formulario = None
    if request.method == 'POST':
        formulario = AutoForm(request.POST)
        if formulario.is_valid():
            formulario.save()
            return redirect('/auto/')
    else:
        formulario = AutoForm()
    context = {
        'titulo':'Agregar Auto',
        'formulario':formulario
    }
    return render(
        request,
        'auto/agregar.html',
        context
    )

def eliminarAuto(request, id_auto):
    autoEncontrado = Auto.objects.get(pk = id_auto)
    autoEncontrado.delete()
    return redirect('/auto/')


def modificarAuto(request, id_auto):
    autoEncontrado = Auto.objects.get(pk=id_auto)
    formulario = None
    if request.method == 'POST':
        formulario = AutoForm(request.POST, instance=autoEncontrado)
        if formulario.is_valid():
            formulario.save()
            return redirect('/auto/')
    else:
        formulario = AutoForm(instance=autoEncontrado)    
    context = {
        'titulo':'Modificar Auto',
        'formulario':formulario
    }
    return render(
        request,
        'auto/modificar.html',
        context
    )

def listarAutos(request):
    autos = Auto.objects.all()
    context = {
        'titulo':'Listar Auto',
        'autos':autos
    }
    return render(
        request,
        'auto/listar.html',
        context
    )