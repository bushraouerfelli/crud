import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Incident } from '../incident';
import { IncidentService } from '../incident.service';
// import {Incident} from "../../models/incident";
// import {IncidentService} from "../../service/incident.service";


@Component({
  selector: 'app-update-incident',
  templateUrl: './update-incident.component.html',
  styleUrl: './update-incident.component.css'
})
export class UpdateIncidentComponent implements OnInit{
  incident: Incident = new  Incident();
  id!: number;
  constructor(
    private incidentService:IncidentService,
    private route: ActivatedRoute,
    private router:Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.incidentService.getIncidentById(this.id).subscribe(data => {
      console.log(data)
      this.incident = data;
    }, error => console.log(error));
  }

  onSubmit() {
this.incidentService.updateIncident(this.id,this.incident).subscribe(data =>{
  this.goToIncidentList();
}, error => console.log(error));
  }
  goToIncidentList(){
    this.router.navigate(['/incidents']);
  }
}

