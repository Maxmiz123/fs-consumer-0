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
    this.payments = new Array();
    payment1.card_number = "xxxx-xxxx-xxxx";
    payment1.name_on_card = "Name on Card"
    payment1.expiration_date="mm/yy"
    payment1.security_code = "xxx"

    let payment2 = new Payment();
    payment2.name_on_card = "George Clooney";
    payment2.card_number = "1234-5678-9012"
    payment2.expiration_date = "04/24"
    payment2.security_code ="199"

    this.payments.push(payment1);
    this.payments.push(payment2);


  }

  ngOnInit() {
  }

  navToLogin() {
    this.navCtrl.navigateForward('');
  }

}
