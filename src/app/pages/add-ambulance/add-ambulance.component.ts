import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ambulance } from 'src/app/model/ambulance.model';
import { AmbulanceService } from 'src/app/services/ambulance.service';

@Component({
  selector: 'app-add-ambulance',
  templateUrl: './add-ambulance.component.html',
  styleUrls: ['./add-ambulance.component.scss']
})
export class AddAmbulanceComponent implements OnInit {

  addAmbulanceRequest : Ambulance = {
    ambulancesid : 0,
    vehicle_number: '',
    equipment_level: 0,
    current_stastus: 0,

  }

  constructor(private ambulanceService: AmbulanceService, private router: Router) { }

  ngOnInit(): void {
  }

  addAmbulance(){
    this.ambulanceService.addAmbulance(this.addAmbulanceRequest).subscribe({
      next: (ambulance) => {
       this.router.navigate(['/icons']);
      },
    })
  }

}
