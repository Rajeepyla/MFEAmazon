import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {UiSpinnerModule} from 'component-base-ui-spinner'

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, UiSpinnerModule],
  selector: 'payment-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'payment';
}
