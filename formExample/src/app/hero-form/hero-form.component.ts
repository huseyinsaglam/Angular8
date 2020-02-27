import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  constructor() { }

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  // model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  model = new Hero();

  submitted = false;

  onSubmit(ngForm) { 
    this.submitted = true; 
  console.log(this.model)
  }

  newHero() {
    this.model = new Hero();
  }

  ngOnInit() {
  }

 

}
