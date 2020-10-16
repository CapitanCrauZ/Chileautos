from django.urls import path
from .views import registro, iniciarSesion, salir, perfil
#
urlpatterns = [
    path('registro/', registro, name='registro'),
    path('', registro, name='iniciarSesion'),
    path('salir/', registro, name='salir'),
    path('perfil/', registro, name='perfil')
]