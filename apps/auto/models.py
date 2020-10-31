from django.db import models

# Create your models here.

class Auto(models.Model):
    nombre = models.CharField(max_length=50,null=False,blank=False)
    modelo = models.CharField(max_length=50)
    marca = models.CharField(max_length=50)
    detalle = models.TextField(max_length=50)
    año = models.PositiveIntegerField()
    precio = models.PositiveIntegerField()
    

class PerfilAuto(models.Model):
    imagenAuto = models.FileField(upload_to='fotos', default=None)
    auto = models.OneToOneField(Auto, on_delete=models.CASCADE, blank=True)
    
