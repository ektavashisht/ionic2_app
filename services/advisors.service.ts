import { Injectable } from '@angular/core';
import { Advisor } from '../models/advisor';

import { Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class AdvisorsService{

	constructor(private http: Http){};

	getPopularAdvisors(): Observable<Advisor[]>{
		return this.http
				   .get('/assets/data/advisors.json')
             	   .map(response => response.json() as Advisor[])
             	   .catch(error => {
				        console.log(error);
				        return Observable.of<Advisor[]>([]);
				    });
	}

	getRecentAdvisors(): Observable<Advisor[]>{
		return this.http
				   .get('/assets/data/advisors.json')
             	   .map(response => response.json() as Advisor[])
             	   .catch(error => {
				        console.log(error);
				        return Observable.of<Advisor[]>([]);
				    });
	}

}