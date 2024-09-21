import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Ambulance } from '../model/ambulance.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AmbulanceService {

  baseApiUrl : string = environment.baseApiUrl;


  constructor(private http : HttpClient) { }

  getAllAmbulance(): Observable<Ambulance[]>{

   return this.http.get<Ambulance[]>(this.baseApiUrl + 'api/ambulances')

  }

  addAmbulance(addAmbulanceRequest : Ambulance){
    return this.http.post<Ambulance>(this.baseApiUrl + 'api/ambulances', addAmbulanceRequest);
  }

  getAmbulance(ambulancesid: number): Observable<Ambulance> {
    return this.http.get<Ambulance>(`${this.baseApiUrl}api/ambulances/${ambulancesid}`);
}

  updateAmbulance(ambulancesid: number, updateAmbulanceRequest: Ambulance): Observable<Ambulance>{
   return this.http.put<Ambulance>(this.baseApiUrl + 'api/ambulances/' + ambulancesid, updateAmbulanceRequest);
  }

  getAmbulanceID(ambulancesid: number): Observable<Ambulance> {
    return this.http.get<Ambulance>(`${this.baseApiUrl}api/ambulances/${ambulancesid}`);
}

  deleteAmbulance(ambulancesid: number): Observable<Ambulance>{
   return this.http.delete<Ambulance>(this.baseApiUrl + 'api/ambulances/' + ambulancesid )
  }

}

