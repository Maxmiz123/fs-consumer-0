import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { Payment } from '../models /payment'

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
    payment1.card_number = "xxxx-xxxx-xxxx";
    payment1.name_on_card = "Name on Card"
    payment1.expiration_date="MM/YY"
    payment1.security_code = "xxx"

    this.payments.push(payment1);
  }

  ngOnInit() {
  }

  navToPropertydetails() {
    this.navCtrl.navigateForward('');
  }

}
