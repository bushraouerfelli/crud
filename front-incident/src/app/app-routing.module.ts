import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { IncidentListComponent } from './incident-list/incident-list.component';
import { CreateIncidentComponent } from './create-incident/create-incident.component';
import { UpdateIncidentComponent } from './update-incident/update-incident.component';
import { IncidentDetailsComponent } from './incident-details/incident-details.component';



const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  {
    path: 'incidents',
    component: IncidentListComponent
  },
  {  path:'createIncidents',
  component: CreateIncidentComponent
},
{path: '', redirectTo: 'welcome', pathMatch: 'full'},
{path: 'update-incident/:id', component: UpdateIncidentComponent},
{path:'incident-details/:id', component: IncidentDetailsComponent}


 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
