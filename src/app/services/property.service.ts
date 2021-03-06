
import { Injectable } from '@angular/core';
import { Property } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  public properties: Array<Property> = [];

  constructor() { }

  getAllProperties() {
    this.properties = [];

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

    let property3 = new Property();
    property3.id = 3;
    property3.name = "George's Cabin";
    property3.city = "Lake Cumo, Italy";
    property3.cost = "$50,000 p.w";
    property3.rating = "1/5";
    property3.date = "2/02 - 21/02";

    let property4 = new Property();
    property4.id = 4;
    property4.name = "The White House";
    property4.city = "Washington DC, USA";
    property4.cost = "$100,000 p.w";
    property4.rating = "5/5";
    property4.date = "12/01 - 12/01";

    this.properties.push(property1);
    this.properties.push(property2);
    this.properties.push(property3);
    this.properties.push(property4);

    return this.properties;
  }

  // Returns null if not found.
  findPropertyById(id: number): Property {
    let foundProperty: Property = null;

    this.properties.forEach(
      (property: Property) => {
        if (property.id == id) {
          foundProperty = property;
        }
      }
    );

    return foundProperty;
  }

}