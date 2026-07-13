from django.urls import path
from .views import RegisterView, login_page, signup_page,dashboard
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    # HTML Pages
    path("login/", login_page, name="login_page"),
    path("signup/", signup_page, name="signup_page"),
    path("dashboard/", dashboard, name="dashboard"), 
    # APIs
    path("api/register/", RegisterView.as_view(), name="register"),
    path("api/login/", TokenObtainPairView.as_view(), name="login"),
    path("api/refresh/", TokenRefreshView.as_view(), name="refresh"),
]