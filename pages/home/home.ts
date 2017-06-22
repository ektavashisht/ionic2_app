import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AdvisorsService } from '../../services/advisors.service'
import { Advisor } from '../../models/advisor';
import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/operator/catch';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ AdvisorsService ]
})
export class HomePage {

  segment: any;
  popularAdvisors: Observable< Advisor[] >; //hold popular advisors
  recentAdvisors: Observable< Advisor[] >;

  constructor(public navCtrl: NavController, private advisorService: AdvisorsService) {
  	this.segment = "advisor";
  	//get popular advisors
  	this.popularAdvisors = this.advisorService
  							   .getPopularAdvisors();

  	this.recentAdvisors = this.advisorService
  							   .getRecentAdvisors();

  }

}
