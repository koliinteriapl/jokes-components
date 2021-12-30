import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';
import { LoadComponentService } from 'src/app/lazy/load-component.service';
import { Joke } from 'src/app/models/jokes.d';
import { JokeApiService } from 'src/app/services/joke-api.service';

@Component({
  selector: 'app-get-joke',
  template: `
    <p>
      <input (click)="loadJoke()" type="button" value="Load random joke">
    </p>
  `,
  styles: [
  ]
})
export class GetJokeComponent {

  constructor(
    private jokeApiService: JokeApiService,
    private viewContainerRef: ViewContainerRef,
    private cfr: ComponentFactoryResolver,
    private loadComponentService: LoadComponentService

  ) { }

  loadJoke() {
    this.jokeApiService.getJoke()
    .subscribe((ans) => {
        this.loadComponent(ans as Joke);
      });
  }

  loadComponent(joke: Joke) {
    if (joke.error) {
      return;
    }
    this.viewContainerRef.clear();

    this.loadComponentService.loadComponent(joke)
      .then(loadedComponent => {
        let componentRef = this.viewContainerRef.createComponent(
          // this.cfr.resolveComponentFactory(
            loadedComponent[this.loadComponentService.getClassName(joke.type)]
          // )
        ) as any;
        componentRef.instance['content'] = joke;
      });
  }
}
