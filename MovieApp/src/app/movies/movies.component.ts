import { Component } from '@angular/core';
import { Movies } from '../movie';
import { product } from '../movie.datasource';
import { MovieService } from '../movie.service';

@Component({
    selector: 'movies'  ,
    templateUrl: 'movies.component.html'
})
export class MoviesComponent {
    title = 'Movie List';
     movies = product
    // movies : Movies[];
    selectedMovie : Movies;

    constructor(private movieService : MovieService){}

    // ngOnInit constructordan sonra calisiyor
    ngOnInit(): void {
        this.getMovie();
    }
    
    onSelect(city:Movies){
        this.selectedMovie = city;
    }

    getMovie()
    {
          this.movies = this.movieService.getMovies();
    }
 // buraya kadar birinci kısım
}