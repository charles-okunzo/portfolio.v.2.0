from django.shortcuts import render

# Create your views here.
def home(request):
    title='Charles P. Okunzo | Welcome to my Portfolio'
    context = {
        'title':title
    }
    return render(request, 'portfolio_app/index.html', context)

def projects(request):
    title = 'Charles P. Okunzo | My Projects'
    context = {
        'title':title
    }
    return render(request, 'portfolio_app/projects.html', context)

def hire_me(request):
    title = 'Charles P. Okunzo | Hire Me'
    context = {
        'title':title
    }
    return render(request, 'portfolio_app/hire_me.html', context)