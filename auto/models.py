from django.db import models

# Create your models here.

class Auto(models.Model):
    nombre = models.CharField(max_length=50,null=False,blank=False)
    precio = models.PositiveIntegerField()
    detalle = models.TextField(max_length=50)
    anio = models.PositiveIntegerField()
    fecha_ingreso = models.DateTimeField(auto_now=True)