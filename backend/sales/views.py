from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response

from django.conf import settings
from django.core.mail import EmailMessage
from django.template.loader import get_template

from .models import Order
from .serializers import OrderSerializer


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class LastOrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all().order_by('-id')[:1]
    serializer_class = OrderSerializer


@api_view(['POST'])
def order_email(request):

    if request.data['email'] != '':
        if request.method == 'POST':

            # products = []
            # for product in request.data['products']:
            #     products.append(product)

            context = {
                'products': request.data['products'],
                'command_id': request.data['command_id'],
                'first_name': request.data['first_name'],
                'last_name': request.data['last_name'],
                'telephone': request.data['telephone'],
                'email': request.data['email'],
                'country': request.data['country'],
                'region': request.data['region'],
                'city': request.data['city'],
                'address': request.data['address'],
                'products_price': request.data['products_price'],
                'delivery_price': request.data['delivery_price'],
                'total_price': request.data['total_price'],
            }

            subject = 'Comanda receptionata VINDECARE.ORG'

            template = get_template('email/order.html')
            content = template.render(context)

            msg = EmailMessage(
                subject,
                content,
                settings.EMAIL_HOST_USER,
                [request.data['email']]
            )
            msg.content_subtype = 'html'
            msg.send()

        return Response('email sent')
    else:
        return Response('email not provided')
