from django.shortcuts import render

def index(request):
    return render(request, 'home.html')

def producto(request):
    return render(request, 'producto.html')

def registro(request):
    return render(request, 'registro.html')

def callejon_del_bosque(request):
    return render(request, 'callejon_del_bosque.html')

def carrito(request):
    return render(request, 'carrito.html')

def contacto(request):
    return render(request, 'contacto.html')

def iniciarsesion(request):
    return render(request, 'iniciarsesion.html')

def luna_llena(request):
    return render(request, 'luna_llena.html')

def monte_fuji(request):
    return render(request, 'monte_fuji.html')

def nav(request):
    return render(request, 'nav.html')

def noche_estrellada(request):
    return render(request, 'noche_estrellada.html')

def noche_nueva_york(request):
    return render(request, 'noche_nueva_york.html')

def paisaje_de_otoño(request):
    return render(request, 'paisaje_de_otoño.html')

def paseo_de_otoño(request):
    return render(request, 'paseo_bajo_la_lluvia.html')

def perro_color(request):
    return render(request, 'perro_color.html')

def registrarse(request):
    return render(request, 'registrarse.html')