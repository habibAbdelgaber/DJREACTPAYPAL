from django.contrib import admin
from django.urls import path
from payments import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('webhook/payment/', views.ProcessWebhookView.as_view(), name='payment')
]
