import { Component, Input } from '@angular/core';


import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

@Component({
  selector: 'advisors-slider',
  template: `<ion-slides slidesPerView="3" spaceBetween="10">
  	<ion-slide *ngFor="let advisor of advisors | async">

      <a class="fav-heart" href="javascript:;" (click)="toggleFav(advisor.id)" [ngClass]="{'fav': isFav(advisor.id)}">
        <ion-icon name="md-heart-outline"></ion-icon>
        <ion-icon name="md-heart"></ion-icon>
      </a>

  		<img src="{{advisor.image}}" alt="{{advisor.name}}" />
  		<span class="advisor-name">{{advisor.name}}</span>
  		<div class="advisor-ratings">
  			<rating [value]="advisor.rating"></rating>
  			<span>{{advisor.reviews}} Reviews</span>
  		</div>
  	</ion-slide>
  </ion-slides>`
})
export class EventSlider {
	@Input() advisors: any[];
  @ViewChild(Slides) slides: Slides;

  favs: number[] = [];

  constructor(){
    console.log( this.slides );
  }

  toggleFav(id){
    if(this.favs.indexOf(id) < 0){
      this.favs.push(id)
    }else{
      this.favs.splice( this.favs.indexOf(id), 1 );
    }
    
  }
  isFav(id){
    return this.favs.indexOf(id) > -1
  }
}