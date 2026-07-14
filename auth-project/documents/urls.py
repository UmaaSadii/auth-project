from django.urls import path
from . import views

urlpatterns = [

    path("dashboard/", views.dashboard, name="dashboard"),

    path("editor/", views.editor, name="editor"),

    path("save/", views.save_document, name="save_document"),

    path("edit/<int:id>/", views.edit_document, name="edit_document"),

    path("delete/<int:id>/", views.delete_document, name="delete_document"),

]