from django.shortcuts import render

# Create your views here.
def home(request):
    title='Charles P. Okunzo | Welcome to my Portfolio'
    context = {
        'title':title
    }
    return render(request, 'portfolio_app/index.html', context)