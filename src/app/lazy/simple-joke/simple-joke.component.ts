import { Component, Input } from '@angular/core';
import { Joke } from 'src/app/models/jokes';

@Component({
  selector: 'app-simple-joke',
  template: `
    <p>
      Simple Joke
    </p>
    <p>{{content.joke}}</p>
  `,
  styles: [
  ]
})
export class SimpleJokeComponent {
  @Input() content: Joke;

  constructor() { }
}
