import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'client';
}
