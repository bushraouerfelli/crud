import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {RouterOutlet} from "@angular/router";


// @ts-ignore
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';

import { WelcomeComponent } from './welcome/welcome.component';
import { IncidentListComponent } from './incident-list/incident-list.component';
import { CreateIncidentComponent } from './create-incident/create-incident.component';
import { UpdateIncidentComponent } from './update-incident/update-incident.component';
import { IncidentDetailsComponent } from './incident-details/incident-details.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatMenu, MatMenuTrigger} from "@angular/material/menu";
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import {MatDrawerContainer} from "@angular/material/sidenav";

import {MatToolbar} from "@angular/material/toolbar";


let IncidentService;

@NgModule({
  declarations: [
    
    AppComponent,
    WelcomeComponent,
    IncidentListComponent,
    CreateIncidentComponent,
    UpdateIncidentComponent,
    IncidentDetailsComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    HttpClientModule,
    FormsModule,
    MatDividerModule,
    MatIconModule,
    MatDrawerContainer,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatToolbar,
    MatMenuTrigger,
    MatMenu,
    MatToolbarModule
    

   

  ],
  providers: [
    HttpClient,
    provideAnimationsAsync(),
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
