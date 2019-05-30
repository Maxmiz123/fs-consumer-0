import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationOptions } from '@ionic/angular/dist/providers/nav-controller';
import { Property } from '../models/index';
import { PropertyService } from '../services/property.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  properties: Array<Property>;

  constructor(
    private navCtrl: NavController,
    private propertyService: PropertyService
  ) {
    this.properties = this.propertyService.getAllProperties();
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