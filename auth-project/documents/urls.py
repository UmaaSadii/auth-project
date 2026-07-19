from django.urls import path
from . import views

urlpatterns = [

    path("dashboard/", views.dashboard, name="dashboard"),

    # New Document
    path("editor/", views.editor, name="editor"),

    # Open Existing Document
    path("edit/<int:id>/", views.edit_document, name="edit_document"),

    # Delete
    path("delete/<int:id>/", views.delete_document, name="delete_document"),

    # ONLYOFFICE Callback
    path("callback/<int:id>/", views.callback, name="callback"),
]