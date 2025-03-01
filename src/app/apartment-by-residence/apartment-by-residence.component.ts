import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apartment } from '../core/models/Apartments';
@Component({
  selector: 'app-apartment-by-residence',
  templateUrl: './apartment-by-residence.component.html',
  styleUrls: ['./apartment-by-residence.component.css']
})
export class ApartmentByResidenceComponent {
  residenceId!: number;
  apartments: Apartment[] = []; // Liste des appartements

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.residenceId = +this.route.snapshot.params['id'];
    this.loadApartments(); // Chargez les appartements pour cette résidence
  }

  loadApartments(): void {
    // Simulez une requête asynchrone pour charger les appartements
    this.apartments = [
      { apartNum: 101, floorNum: 1, surface: 50, terrace: true, surfaceterrace: 10, category: 'Standard', ResidenceId: this.residenceId },
      { apartNum: 102, floorNum: 1, surface: 60, terrace: false, surfaceterrace: 0, category: 'Premium', ResidenceId: this.residenceId }
    ];
  }
}
