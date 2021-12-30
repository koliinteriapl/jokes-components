import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandardComponent } from './standard/standard.component';
import { SeriousRoutingModule } from './standard-routing.module';



@NgModule({
  declarations: [
    StandardComponent
  ],
  imports: [
    CommonModule,
    SeriousRoutingModule
  ]
})
export class SeriousModule { }
