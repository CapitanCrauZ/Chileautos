# Importando Path para generar Urls
from django.urls import path
# Importando los View para vincular una funcionalidad ocn una Url
from .views import menu
urlpatterns = [
    path('', menu)
]