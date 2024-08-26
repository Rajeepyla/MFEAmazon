import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { UiSpinnerModule } from 'component-base-ui-spinner';
import { UiCardModule } from 'component-base-ui-card';



@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, UiSpinnerModule, UiCardModule],
  selector: 'profile-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'profile';
  content ='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quod eum aut dolorum odio corrupti? Atque similique voluptatum dolorum, incidunt veritatis sunt sequi aut consectetur, laborum eaque aliquid saepe esse!'

}
