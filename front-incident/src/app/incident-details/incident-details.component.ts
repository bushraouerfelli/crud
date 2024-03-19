import {Component, OnInit} from '@angular/core';

import {ActivatedRoute} from "@angular/router";
import { Incident } from '../incident';
import { IncidentService } from '../incident.service';



@Component({
  selector: 'app-incident-details',
  templateUrl: './incident-details.component.html',
  styleUrl: './incident-details.component.css'
})
export class IncidentDetailsComponent implements OnInit{
  id!: number
  incident!: Incident
  constructor(private  route:ActivatedRoute, private  incidentService:IncidentService) {
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.incident = new Incident();
    this.incidentService.getIncidentById(this.id).subscribe(data =>{
      console.log(data);
      this.incident = data;

    })
  }

}
