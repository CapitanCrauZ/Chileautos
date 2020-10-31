from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Auto, PerfilAuto
from .forms import AutoForm, PerfilAutoForm

# Create your views here.

def agregarAuto(request):
    
    formulario = AutoForm()
    formulario2 = PerfilAutoForm()
    if request.method == 'POST':
        formulario = AutoForm(request.POST)
        formulario2 = PerfilAutoForm(request.POST, request.FILES)
        if formulario.is_valid() and formulario2.is_valid():
            auto = formulario.save()
            perfilAuto = formulario2.save(commit=False)
            perfilAuto.auto = auto
            perfilAuto.save()
            return redirect('/auto/')
    context = {
        'titulo':'Agregar Auto',
        'formulario':formulario,
        'formulario2':formulario2
        
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
    formulario = AutoForm(instance=autoEncontrado)  
    if request.method == 'POST':
        formulario = AutoForm(request.POST, instance=autoEncontrado)
        if formulario.is_valid():
            formulario.save()
            return redirect('/auto/')
    context = {
        'titulo':'Modificar Auto',
        'formulario':formulario,
    }
    return render(
        request,
        'auto/modificar.html',
        context
    )

def listarAutos(request):
    autos = Auto.objects.all()
    imagenAutos = PerfilAuto.objects.all()
    context = {
        'titulo':'Listar Auto',
        'autos':autos,
        'imagenAuto': imagenAutos
    }
    return render(
        request,
        'auto/listar.html',
        context
    )