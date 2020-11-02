# Importando Path para generar Urls
from django.urls import path
# Importando los View para vincular una funcionalidad ocn una Url
from .views import agregarAuto, eliminarAuto, modificarAuto, listarAutos, listarTienda
urlpatterns = [
    path('agregar/', agregarAuto, name='agregar_auto'),
    path('eliminar/<int:id_auto>', eliminarAuto, name='eliminar_auto'),
    path('modificar/<int:id_auto>', modificarAuto, name='modificar_auto'),
    path('', listarAutos, name='listar_auto'),
    path('tienda/', listarTienda, name='tienda_auto')
]