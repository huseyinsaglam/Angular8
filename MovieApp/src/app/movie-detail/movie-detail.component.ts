import { Component, OnInit, Input } from '@angular/core';
import { Movies } from '../movie';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  @Input() abc : Movies
  constructor() { }

  ngOnInit() {
  }

}
