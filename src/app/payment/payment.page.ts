import { Component, OnInit } from '@angular/core';
import { WebIntent } from '@ionic-native/web-intent/ngx';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  constructor(private webIntent: WebIntent) { }

  ngOnInit() {
  }

  upi(){
    const options = {
      action: this.webIntent.ACTION_VIEW,
      url: 'upi://Pay?pa=7060865945@ybl&pn=ApnaRWA&am=10&cu=INR&tn=App Payment',
    }
    this.webIntent.startActivityForResult(options).then(onSuccess=>{
      console.log('success',onSuccess);
    },
    onError=>{
      console.log('error',onError);
    });
  }

}
