import { Component, OnInit } from '@angular/core';
import { RestaurantService } from './restaurant.service';


@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
  providers: [RestaurantService]
})
export class RestaurantsComponent implements OnInit {
restaurants=[];
restaurant={};
  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
  	this.restaurantService.getRestaurants().then( (response) => this.restaurants = response);
  	//
  	//let restaurantId = '58866b06eaa0c200046f5e6e';  	

  	//this.restaurantService.getRestaurant(restaurantId).then( (response)=> {
  	//	this.restaurant = response;
  	//});
  //console.log('Restaurante detalle', response);

  }

}
