import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

declare var Razorpay: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  payNow(){
    const RazorPayOptions = {
      description: 'Demo Payment Application',
      currency: 'INR',
      amount: 30000,
      name: 'Krishna',
      key: 'rzp_test_qmOfyyoux3hlKO',
      image: 'https://w1.pngwing.com/pngs/952/868/png-transparent-business-card-payment-merchant-services-credit-card-merchant-account-provider-surcharge-industry-blue.png',
      prefill: {
        name: 'Krishna',
        email: 'Test@gmail.com',
        phone: '9876512340',
      },
      theme: {
        color: '#f37254'
      },
      modal: {
        ondismiss: () => {
          console.log('dismissed');
        }
      },
      "checkout": {
        "method": {
          "netbanking": "1",
          "card": "1",
          "upi": "1",
          "wallet": "0"
        }
      }
    }

    const successCallback = (paymentid: any) => {
      console.log(paymentid);
    }

    const failureCallback = (e: any) => {
      console.log(e);
    }

    Razorpay.open(RazorPayOptions, successCallback, failureCallback)
  }
}
