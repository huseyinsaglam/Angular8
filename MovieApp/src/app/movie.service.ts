import { Injectable } from '@angular/core';
import { Movies } from './movie';
import { product } from './movie.datasource';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private logginService : LoggingService) { }

  getMovies(): Movies[]{

    this.logginService.add("Movies Service dinleniyor")
    return product
  }
}
