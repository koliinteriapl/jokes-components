import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'serious',
    loadChildren: () => import('./serious/serious.module').then(m=>m.SeriousModule)
  },
  {
    path: 'jokes',
    loadChildren: () => import('./jokes/jokes.module').then(m=>m.JokesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
