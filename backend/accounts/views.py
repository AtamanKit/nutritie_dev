from rest_framework import viewsets, status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from django.conf import settings
from django.core.mail import EmailMessage
from django.template.loader import get_template

from .models import UserSocial, Client
from .serializers import UserSocialSerializer, ClientSerializer


class UserSocialViewSet(viewsets.ModelViewSet):
    queryset = UserSocial.objects.all()
    serializer_class = UserSocialSerializer

class ClientViewSet(viewsets.ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer

@api_view(['POST'])
def purchase_email(request):
    if request.method == 'POST':
        subject = 'Email-l meu pentru tine'

        template = get_template('email/purchase.html')
        content = template.render()

        msg = EmailMessage(
            subject,
            content,
            settings.EMAIL_HOST_USER,
            [request.data['email']]
        )
        msg.content_subtype = 'html'
        msg.send()

    return Response(status=status.HTTP_201_CREATED)