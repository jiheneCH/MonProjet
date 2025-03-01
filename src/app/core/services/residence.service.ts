import { Injectable } from '@angular/core';
import { Residence } from '../models/Residence';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ResidenceService {
  url: string = 'http://localhost:3000/residences';

  constructor(private http: HttpClient) {}

  getResidenceList() {
    return this.http.get<Residence[]>(this.url);
  }

  getResidenceById(id: number) {
    return this.http.get<Residence>(this.url + '/' + id);
  }

  addResidence(r: Residence) {
    return this.http.post(this.url, r);
  }


  deleteResidence(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
  getResidences(): Observable<Residence[]> {
    const residences: Residence[] = [
      { id: 1,
        name: 'El fel',
        address: 'Borj Cedria',
        image: '../../assets/images/R1.jpg',
        status: 'Disponible',},
      {   id: 2,
        name: 'El yasmine',
        address: 'Ezzahra',
        image: '../../assets/images/R2.jpg',
        status: 'Disponible',},
      {   id: 3,
        name: 'El Arij',
        address: 'Rades',
        image: '../../assets/images/R1.jpg',
        status: 'Vendu', }
    ];
    return of(residences);  // Utilisation de `of` pour simuler un Observable
  }
  
}
