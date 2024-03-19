import { Component } from '@angular/core';
import { IncidentService } from './incident.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [IncidentService]
})
export class AppComponent {
  title = 'front-incident';
}
