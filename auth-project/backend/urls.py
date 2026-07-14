from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include("accounts.urls")),
    path("", include("documents.urls")),
    # path("ckeditor/", include("ckeditor_uploader.urls")),
]