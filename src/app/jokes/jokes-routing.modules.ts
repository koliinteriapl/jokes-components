import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetJokeComponent } from './get-joke/get-joke.component';

const routes: Routes = [{ path: '', component: GetJokeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JokesRoutingModule {}
