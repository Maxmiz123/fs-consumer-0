import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { Payment } from '../models/payment'

@Component({ 
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
  public payments: Array<Payment> = [];
  
  constructor(
    private navCtrl: NavController
  ) { 
    let payment1 = new Payment();
    payment1.card_number = "4575-5656-7788";
    payment1.name_on_card = "Max Misrahi"
    payment1.expiration_date="05/22"
    payment1.security_code = "778"

    this.payments.push(payment1);
  }

  ngOnInit() {
  }

  navToPropertydetails() {
    this.navCtrl.navigateForward('');
  }

  navToCheckout () {
    this.navCtrl.navigateForward ('checkout');
  }

  navToLogin() {
    this.navCtrl.navigateForward ('');
  }

}
