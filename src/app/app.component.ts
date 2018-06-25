import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  process: boolean;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {

      if (event instanceof NavigationStart) {
        this.process = true
      }

      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          this.process = false
        }, 200);
      }

    });
  }  
}
