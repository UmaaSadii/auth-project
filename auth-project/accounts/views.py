from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from rest_framework import generics
from .serializers import RegisterSerializer


# ---------- API ----------
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer


# ---------- HTML Login ----------
def login_page(request):

    if request.method == "POST":

        username = request.POST.get("username")
        password = request.POST.get("password")

        user = authenticate(
            request,
            username=username,
            password=password
        )

        if user is not None:
            login(request, user)
            return redirect("dashboard")

    return render(request, "accounts/login.html")


# ---------- HTML Signup ----------
def signup_page(request):

    if request.method == "POST":

        username = request.POST.get("username")
        email = request.POST.get("email")
        password = request.POST.get("password")

        User.objects.create_user(
            username=username,
            email=email,
            password=password
        )

        return redirect("login")

    return render(request, "accounts/signup.html")


# ---------- Dashboard ----------
def dashboard(request):
    return render(request, "accounts/dashboard.html")