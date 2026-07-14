from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from .models import Document


# =========================
# Login
# =========================

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


# =========================
# Signup
# =========================

def signup_page(request):

    if request.method == "POST":

        User.objects.create_user(
            username=request.POST.get("username"),
            email=request.POST.get("email"),
            password=request.POST.get("password"),
        )

        return redirect("login_page")

    return render(request, "accounts/signup.html")


# =========================
# Dashboard
# =========================

def dashboard(request):

    documents = Document.objects.all().order_by("-created_at")

    return render(
        request,
        "accounts/dashboard.html",
        {
            "documents": documents
        }
    )


# =========================
# New Document
# =========================

def editor(request):

    return render(request, "documents/editor.html")


# =========================
# Save Document
# =========================

def save_document(request):

    if request.method == "POST":

        title = request.POST.get("title")
        content = request.POST.get("content")

        Document.objects.create(
            title=title,
            content=content
        )

        return redirect("dashboard")

    return redirect("editor")


# =========================
# Edit Document
# =========================

def edit_document(request, id):

    document = get_object_or_404(Document, id=id)

    if request.method == "POST":

        document.title = request.POST.get("title")
        document.content = request.POST.get("content")

        document.save()

        return redirect("dashboard")

    return render(
        request,
        "documents/editor.html",
        {
            "document": document
        }
    )


# =========================
# Delete Document
# =========================

def delete_document(request, id):

    document = get_object_or_404(Document, id=id)

    document.delete()

    return redirect("dashboard")