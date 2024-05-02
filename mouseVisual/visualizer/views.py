from django.shortcuts import render


def visualization(request):
    return render(request, 'visualizer.html')
