import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
    <a routerLink="/dashboard">Dashboard</a>
    <a routerLinkActive="active" routerLink="/heroes">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  stylesUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}
