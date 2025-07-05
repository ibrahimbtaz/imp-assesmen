from django.urls import path
from .views import UserCreateView, UserDetailView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('signup/', UserCreateView.as_view(), name='signup'),
    path('signin/', TokenObtainPairView.as_view(), name='token_obtain_pair'), # SignIn
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('profile/', UserDetailView.as_view(), name='user_detail'), # CRUD User (RUD)
]