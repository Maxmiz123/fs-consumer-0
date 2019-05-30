import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationOptions } from '@ionic/angular/dist/providers/nav-controller';
import { Property } from '../models/index';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  properties: Array<Property> = [];

  constructor(
    private navCtrl: NavController
  ) {

    let property1 = new Property();
    property1.id = 1;
    property1.name = "Buckingham Palace";
    property1.city = "London, England";
    property1.cost = "$3,000 p.w";
    property1.rating = "4.5/5";
    property1.date = "29/08 - 17/09";


    let property2 = new Property();
    property2.id = 2;
    property2.name = "La Casa de Papel";
    property2.city = "Bogota, Colombia";
    property2.cost = "$10,000 p.w";
    property2.rating = "4.99/5";
    property2.date = "12/03 - 23/03";

    this.properties.push(property1);
    this.properties.push(property2);

  }

  navToProperty(property: Property) {

    this.navCtrl
      .navigateForward("property-details", {
        queryParams: {
          q: "ionic",
          propertyName: property.name,
          propertyId: property.id
        }
      });
  }

  navToProfile() {
    this.navCtrl.navigateForward("tabs");
  }

}