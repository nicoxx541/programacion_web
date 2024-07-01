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

from django.shortcuts import render, get_object_or_404, redirect
from .models import User
from .forms import UserForm

def user_list(request):
    users = User.objects.all()
    return render(request, 'myapp/user_list.html', {'users': users})

def user_create(request):
    if request.method == 'POST':
        form = UserForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('user_list')
    else:
        form = UserForm()
    return render(request, 'myapp/user_form.html', {'form': form})

def user_update(request, pk):
    user = get_object_or_404(User, pk=pk)
    if request.method == 'POST':
        form = UserForm(request.POST, instance=user)
        if form.is_valid():
            form.save()
            return redirect('user_list')
    else:
        form = UserForm(instance=user)
    return render(request, 'myapp/user_form.html', {'form': form})

def user_delete(request, pk):
    user = get_object_or_404(User, pk=pk)
    if request.method == 'POST':
        user.delete()
        return redirect('user_list')
    return render(request, 'myapp/user_confirm_delete.html', {'user': user})
