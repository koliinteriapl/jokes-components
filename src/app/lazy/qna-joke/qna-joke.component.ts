import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { Joke } from 'src/app/models/jokes';

@Component({
  selector: 'app-qna-joke',
  template: `
    <p>
      Question and Answer Joke
    </p>
    <p>{{content.setup}}</p>
    <p (click)="showAnswer()"
       class="answer-btn"
       *ngIf="!answerVisible">Show answer</p>
    <p *ngIf="answerVisible">Answer: {{content.delivery}}</p>
  `,
  styles: [
    `.answer-btn{
      cursor: pointer;
      text-decoration: underline;
    }`
  ]
})
export class QnAJokeComponent implements OnInit {
  @Input() content: Joke;
  
  answerVisible:boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.answerVisible = false;
  }

  showAnswer() {
    this.answerVisible = true;
  }
}

@NgModule({
  imports:[
    CommonModule
  ],
  declarations:[QnAJokeComponent],
})
export class QnAJokeLazyLoadModule{}