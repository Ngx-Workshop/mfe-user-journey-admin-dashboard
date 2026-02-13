import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'ngx-seed-mfe',
  imports: [MatButtonModule],
  template: `
    <div>
      <h1>Got something in the charcoals working... 🍖</h1>
      <p>Try other pages for now</p>
    </div>
  `,
  styles: [``],
})
export class App {}

// 👇 **IMPORTANT FOR DYMANIC LOADING**
export default App;
