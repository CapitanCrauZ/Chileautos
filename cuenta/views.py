from django.shortcuts import render, redirect
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm
from django.contrib.auth import login, logout, authenticate

# Create your views here.
def registro(request):
    #GET
    formulario = UserCreationForm()
    if request.method == 'POST':
        formulario = UserCreationForm(data = request.POST)
        if formulario.is_valid():
            usuarioRegistrado = formulario.save()
            if usuarioRegistrado is not None:
                login(request, usuarioRegistrado)
                return redirect('/cuenta/perfil/')
    context = {
        'formulario':formulario
    }
    return render(
        request,
        'usuario/registro.html',
        context
    )
    #POST
def iniciarSesion(request):
    #GET
    formulario = AuthenticationForm()
    if request.method == 'POST':
        formulario = AuthenticationForm(data = request.POST)
        if formulario.is_valid():
            username = formulario.cleaned_data['username']
            password = formulario.cleaned_data['password']

            usuarioLogueado = authenticate(username = username, password = password) 
            if usuarioLogueado is not None:
                login(request, usuarioLogueado)
                return redirect('perfil/')

    context = {
        'formulario':formulario
    }
    return render(
        request,
        'usuario/login.html',
        context
    )
    #POST
def salir(request):
    logout(request)
    return redirect('')


def perfil(request):
    if request.user.is_authenticated:
        return render(
            request,
            'usuario/perfil.html'
        )
    return redirect('')