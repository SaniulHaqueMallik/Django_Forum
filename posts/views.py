from django.shortcuts import render
from django.http import HttpResponse
from .models import Post
# Create your views here.


def index(request):
    # get all post upto 20
    posts = Post.objects.all()[:20]

    # show
    return render(request, 'posts.html',
                  {'posts': posts})
