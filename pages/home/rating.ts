import { Component, Input } from '@angular/core';

@Component({
  selector: 'rating',
  template: `<div>
  	<ul>
  		<li *ngFor="let i of range(value)"><ion-icon name="star"></ion-icon></li>
  		<li *ngFor="let i of range(5 - value)"><ion-icon name="star-outline"></ion-icon></li>
  	</ul>
  </div>`
})
export class Rating {
	@Input() value: number;

	range(value) { 
	    let a = []; 
	    for(let i = 0; i < value; ++i){ 
	      a.push(i+1) 
	    } 
	    return a; 
	}
}