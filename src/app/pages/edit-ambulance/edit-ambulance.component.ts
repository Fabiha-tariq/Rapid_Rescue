import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Ambulance } from 'src/app/model/ambulance.model';
import { AmbulanceService } from 'src/app/services/ambulance.service';

@Component({
  selector: 'app-edit-ambulance',
  templateUrl: './edit-ambulance.component.html',
  styleUrls: ['./edit-ambulance.component.scss']
})
export class EditAmbulanceComponent implements OnInit {

  getAmbulance: Ambulance = {
    ambulancesid: 0,
    vehicle_number: '',
    equipment_level: 0,
    current_stastus: 0,
  };

  constructor(private route: ActivatedRoute, private ambulanceService: AmbulanceService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const ambulancesid = Number(params.get('ambulancesid')); // Convert to number

        if (ambulancesid) {
          this.ambulanceService.getAmbulance(ambulancesid).subscribe({
            next: (response) => {
              this.getAmbulance = response;
            }
          });
        }
      }
    });
  }

  updateAmbulance(){
    this.ambulanceService.updateAmbulance(this.getAmbulance.ambulancesid, this.getAmbulance).subscribe({
      next: (response) => {
        this.router.navigate(['/icons']);
      }
    })
  }
}
