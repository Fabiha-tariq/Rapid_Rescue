import { Component, OnInit } from '@angular/core';
import { Ambulance} from 'src/app/model/ambulance.model';
import { AmbulanceService } from 'src/app/services/ambulance.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {


  ambulance: Ambulance[] = [];
constructor( private ambulanceService: AmbulanceService) { }

  ngOnInit(): void {

    this.ambulanceService.getAllAmbulance().subscribe({
      next: (ambulance) => {
        this.ambulance = ambulance;
      },
      error: (response) => {
        console.log(response);
      },
    })

  }
}
