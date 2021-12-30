import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetJokeComponent } from './get-joke/get-joke.component';
import { JokesRoutingModule } from './jokes-routing.modules';



@NgModule({
  declarations: [
    GetJokeComponent
  ],
  imports: [
    CommonModule,
    JokesRoutingModule
  ]
})
export class JokesModule { }
