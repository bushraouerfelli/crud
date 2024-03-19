import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Incident } from '../incident';
import { IncidentService } from '../incident.service';
// import {Incident} from "../../models/incident";
// import {IncidentService} from "../../service/incident.service";

@Component({
  selector: 'app-incident-list',
  templateUrl: './incident-list.component.html',
  styleUrl: './incident-list.component.css'
})
export class IncidentListComponent implements OnInit {
  sideBarOpen: boolean | undefined;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;


  }
  incidents: Incident[] = [];
  constructor(private incidentService :IncidentService ,private router :Router ){ }
  ngOnInit(): void {
     this.incidentService.getIncidentList().subscribe((data :Incident[] )=> {
      this.incidents = data;
    });
 }
 private  getIncident(){
   this.incidentService.getIncidentList().subscribe(data=>{
     this.incidents = data;
   })

 }
 updateIncident(id:number){
  this.router.navigate(['update-incident', id]);

 }

  deleteIncident(id: number) {
    this.incidentService.deleteIncident(id).subscribe(data => {
      console.log(data);
      this.getIncident();
    })
  }

  incidentDetails(id: number) {
    this.router.navigate(['incident-details', id]);
  }
}
