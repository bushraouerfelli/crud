import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Incident } from '../incident';
import { IncidentService } from '../incident.service';


@Component({
  selector: 'app-create-incident',
  templateUrl: './create-incident.component.html',
  styleUrl: './create-incident.component.css'
})
export class CreateIncidentComponent implements OnInit  {
  incident: Incident = new Incident();
  // imgURL: any;
  // userFile: any  ;
  // public message!: string;
  // public imagePath:any;


  



  constructor(private incidentService: IncidentService, private router:Router){ }
  logSelectedIncidentType() {
  }

  ngOnInit(): void {
  }

  saveIncident(){

      this.incidentService.createIncident(this.incident).subscribe( data =>{console.log(data);
      this.goToIncidentList();
    },
    error => console.log(error));

  }
  goToIncidentList(){
    this.router.navigate(['/incidents']);
  }
  onSubmit() {
    console.log(this.incident);
    this.saveIncident();
  }


  // onSelectFile(event:any) {
  //   if (event.target.files.length > 0)
  //   {
  //     const file = event.target.files[0];
  //     this.userFile = file;
  //    // this.f['profile'].setValue(file);
 
  //   var mimeType = event.target.files[0].type;
  //   if (mimeType.match(/image\/*/) == null) {
  //     this.message = "Only images are supported.";
  //     return;
  //   }
 
  //   var reader = new FileReader();
    
  //   this.imagePath = file;
  //   reader.readAsDataURL(file); 
  //   reader.onload = (_event) => { 
  //     this.imgURL = reader.result; 
  //   }
  // }
     
      
  //   }
    
  }

