import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ambulance } from 'src/app/model/ambulance.model';
import { AmbulanceService } from 'src/app/services/ambulance.service';

@Component({
  selector: 'app-delete-ambulance',
  templateUrl: './delete-ambulance.component.html',
  styleUrls: ['./delete-ambulance.component.scss']
})
export class DeleteAmbulanceComponent implements OnInit {

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
          this.ambulanceService.getAmbulanceID(ambulancesid).subscribe({
            next: (response) => {
              this.getAmbulance = response;
            }
          });
        }
      }
    });
  }


  deleteAmbulance(ambulancesid: number){
    this.ambulanceService.deleteAmbulance(ambulancesid).subscribe({
      next: (response) => {
        this.router.navigate['/icons'];
      }
    })
  }
  

}
