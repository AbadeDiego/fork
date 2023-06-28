from .models import *
from django.shortcuts import render, redirect
from django.core.mail import send_mail
from django.conf import settings
from django.http import JsonResponse

#################### Index Page #######################################

def index(request):
    success_message = None
    if request.method == 'POST':
        email = request.POST.get('email')
        if email:
            Subscription.objects.create(email=email)
            success_message = 'Obrigado por se cadastrar!'  # Definir a mensagem de sucesso
    return render(request, 'user/index.html', {'title': 'home', 'success_message': success_message})
#################### Envio de Mensagem #######################################


def enviar_mensagem(request):
    if request.method == 'POST':
        first_name = request.POST.get('first_name')
        last_name = request.POST.get('last_name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        message = request.POST.get('message')

        # Envie o email
        subject = 'Nova mensagem de contato'
        message = f'Nome: {first_name} {last_name}\nEmail: {email}\nTelefone: {phone}\n\nMensagem: {message}'
        from_email = settings.DEFAULT_FROM_EMAIL
        to_email = ['riseit.is@gmail.com']  # Substitua pelo seu endereço de email

        send_mail(subject, message, from_email, to_email, fail_silently=False)

        return JsonResponse({'success': True})
    else:
        return render(request, 'user/index.html')
