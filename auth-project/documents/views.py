from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
from .models import Document
from docx import Document as DocxDocument
import os
import shutil
import json


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

    if request.method == "POST":

        title = request.POST.get("title")

        if not title:
            title = "New Document"

        filename = title.replace(" ", "_") + ".docx"

        folder = os.path.join(settings.MEDIA_ROOT, "documents")
        os.makedirs(folder, exist_ok=True)

        filepath = os.path.join(folder, filename)

        # Blank DOCX create
        doc = DocxDocument()
        doc.save(filepath)
        print("File Path:", filepath)
        print("File Exists:", os.path.exists(filepath))

        document = Document.objects.create(
            title=title,
            file="documents/" + filename
        )
        print("Database File:", document.file)

        return redirect("edit_document", id=document.id)

    return render(request, "documents/new_document.html")


# =========================
# Open Editor
# =========================

def edit_document(request, id):

    document = get_object_or_404(Document, id=id)

    return render(
        request,
        "documents/editor.html",
        {
            "document": document
        }
    )


# =========================
# ONLYOFFICE Callback
# =========================



@csrf_exempt
def callback(request, id):

    if request.method == "POST":

        body = json.loads(request.body)

        print(body)

        return JsonResponse({"error": 0})

    return JsonResponse({"error": 0})

# =========================
# Delete
# =========================

def delete_document(request, id):

    document = get_object_or_404(Document, id=id)

    if document.file:

        try:
            os.remove(document.file.path)
        except:
            pass

    document.delete()

    return redirect("dashboard")