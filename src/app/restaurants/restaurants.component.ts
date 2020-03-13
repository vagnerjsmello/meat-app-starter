import { Component, OnInit } from '@angular/core';
import { Restaurant } from "./restaurant/restaurant.model";
import { RestaurantsService } from './restaurants.service';


@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[]

  constructor(private restaurantsServices: RestaurantsService) { }

  ngOnInit() {
    this.restaurants = this.restaurantsServices.restaurants();
  }

}
