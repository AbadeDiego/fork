from .models import *
from django.shortcuts import render

#from tabulate import tabulate

#--------------------------------------------- Usuário --------------------------------------------------------

#################### index#######################################
def index(request):
	
	return render(request, 'user/index.html', {'title':'home'})
