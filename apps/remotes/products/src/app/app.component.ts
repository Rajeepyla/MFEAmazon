import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {UiToastModule} from 'component-base-ui-toast'

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule,UiToastModule],
  selector: 'products-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'products';
}
