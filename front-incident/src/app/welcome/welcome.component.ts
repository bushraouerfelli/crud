import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  sideBarOpen: boolean | undefined;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;


  }
 

 

}
