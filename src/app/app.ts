import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'mfe-user-journey-dashboard',
  imports: [RouterModule],
  template: `
    <div class="container">
      <router-outlet #outlet="outlet"></router-outlet>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        width: 100%;
      }
    `,
  ],
})
export class App {}

// 👇 **IMPORTANT FOR DYMANIC LOADING**
export default App;
