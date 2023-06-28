from django import forms
from .models import Subscription

class SubscriptionForm(forms.ModelForm):
    email = forms.EmailField(label='E-mail')

    class Meta:
        model = Subscription
        fields = ('email',)
