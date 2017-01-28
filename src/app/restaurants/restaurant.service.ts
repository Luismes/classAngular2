
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class RestaurantService {
	
	constructor(private http: Http){}
	apiUrl = 'https://stark-river-41252.herokuapp.com/api/restaurants/';
	getRestaurants(){
		//return ['KFC', 'McDonalds', 'Burritos','Tacos']
		return this.http.get(this.apiUrl)
			.map((response: Response) => response.json())
			.toPromise();

	}
	getRestaurant(id: string){
		return this.http.get(this.apiUrl + id)
			.map((response: Response) => response.json())
			.toPromise();

	}

}



//

