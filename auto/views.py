from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def agregarAuto(request):
     return render(
        request,
        'auto/agregar.html'
    )
def eliminarAuto(request):
    return render(
        request,
        'auto/eliminar.html'
    )
def modificarAuto(request):
    return render(
        request,
        'auto/modificar.html'
    )
def listarAutos(request):
    return render(
        request,
        'auto/listar.html'
    )