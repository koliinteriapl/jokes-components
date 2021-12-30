import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';
import { Joke } from '../models/jokes.d';



@Injectable({
  providedIn: 'root'
})
export class JokeApiService {

  constructor(private http: HttpClient) { }

  private apiHost = `https://v2.jokeapi.dev`;

  getJoke(){
    return this.http.get<Joke>(`${this.apiHost}/joke/Programming?blacklistFlags=nsfw`)
    .pipe(catchError(
      (err) => {
        console.log(`ERROR: ${this.apiHost}/joke/Programming?blacklistFlags=nsfw:`, err);
        return err;
      }
    ));
  }
} 
