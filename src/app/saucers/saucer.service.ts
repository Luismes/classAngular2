
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment'; 


@Injectable()
export class SaucerService {

	private apiUrl = environment.API_URL+'restaurants/';
	
	constructor(private http: Http){}

	
	getSaucers(id: string){
		//return ['KFC', 'McDonalds', 'Burritos','Tacos']
		return this.http.get(this.apiUrl+id+'/saucers')
			.map((response: Response) => response.json())
			.toPromise();

	}

	getSaucer(id: string, saucerId: string){
		//return ['KFC', 'McDonalds', 'Burritos','Tacos']
		return this.http.get(this.apiUrl+id+'/saucers/'+saucerId)
			.map((response: Response) => response.json())
			.toPromise();

	}


}