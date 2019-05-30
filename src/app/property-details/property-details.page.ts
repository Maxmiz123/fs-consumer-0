import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Property } from '../models';
import { PropertyService } from '../services/property.service';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.page.html',
  styleUrls: ['./property-details.page.scss'],
})
export class PropertyDetailsPage implements OnInit {

  private propertyId: number;
  public nameOfProperty: string;
  public currentProperty: Property;

  public properties: Array<Property> = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private propertyService: PropertyService
  ) { 
    this.properties = this.propertyService.getAllProperties();
  }

  ngOnInit() {
    // let receivedQueryParams = function(data: any) {
    //   console.log(data);
    //   console.log(data.params.propertyName);

    //   /*will not work*/ this.nameOfProperty = data.params.propertyName;
    // }

    let arrow = (data: any) => {
      this.nameOfProperty = data.params.propertyName;
      this.propertyId = data.params.propertyId;

      // Find the right property by ID
      this.properties.forEach(
        (property: Property) => {
          if (property.id == this.propertyId) {
            // Display this property
            this.currentProperty = property;
          }
        }
      )
    };

    this.activatedRoute.queryParamMap.subscribe(
      // receivedQueryParams,
      arrow
    );

  }

}
