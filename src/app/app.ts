import { Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DashboardDemoComponent } from './demo/dashboard-demo.component';

import { NgxUserMetadataService } from '@tmdjr/ngx-user-metadata';

@Component({
  selector: 'mfe-user-journey-dashboard',
  imports: [DashboardDemoComponent],
  template: `<ngx-dashboard-demo></ngx-dashboard-demo>`,
})
export class OverviewComponent {}

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
export class App {
  userMetadataService = inject(NgxUserMetadataService);
  ngOnInit() {
    console.log('Dashboard MFE initialized');
    console.log(this.userMetadataService.userMetadata());
    console.log(this.userMetadataService.userAuthenticated());
    console.log('_________________________________________');
  }
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}

// 👇 **IMPORTANT FOR DYMANIC LOADING**
export default App;
