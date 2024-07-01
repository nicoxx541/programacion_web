from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('producto/', views.producto, name='producto'),
    path('registro/', views.registro, name='registro'),
    path('callejon_del_bosque/', views.callejon_del_bosque, name='callejon_del_bosque'),
    path('carrito/', views.carrito, name='carrito'),
    path('contacto/', views.contacto, name='contacto'),
    path('iniciarsesion/', views.iniciarsesion, name='iniciarsesion'),
    path('luna_llena/', views.luna_llena, name='luna_llena'),
    path('monte_fuji/', views.monte_fuji, name='monte_fuji'),
    path('nav/', views.nav, name='nav'),
    path('noche_estrellada/', views.noche_estrellada, name='noche_estrellada'),
    path('noche_nueva_york/', views.noche_nueva_york, name='noche_nueva_york'),
    path('paisaje_de_otoño/', views.paisaje_de_otoño, name='paisaje_de_otoño'),
    path('paseo_de_otoño/', views.paseo_de_otoño, name='paseo_de_otoño'),
    path('perro_color/', views.perro_color, name='perro_color'),
    path('registrarse/', views.registrarse, name='registrarse'),

    path('list', views.user_list, name='user_list'),
    path('new/', views.user_create, name='user_create'),
    path('edit/<int:pk>/', views.user_update, name='user_update'),
    path('delete/<int:pk>/', views.user_delete, name='user_delete'),

]
