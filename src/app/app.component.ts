import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>
        Welcome to {{title}}!
      </h1>
      <ul>
        <li><a href="/serious">Serious module</a></li>
        <li><a href="/jokes">Jokes module</a></li>
      </ul>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: [
    `li {display: inline; margin: 1rem;}`
  ]
})
export class AppComponent {
  title = 'jokes-components';
}
