import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'ngx-seed-mfe',
  imports: [MatButtonModule],
  template: ` <h1>Got some in the charcoals working... 🍖</h1> `,
  styles: [``],
})
export class App {}

// 👇 **IMPORTANT FOR DYMANIC LOADING**
export default App;
