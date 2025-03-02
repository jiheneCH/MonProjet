import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Apartment } from 'src/app/core/models/Apartments';
import { Residence } from 'src/app/core/models/Residence';
@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent {
  apartForm: FormGroup;
 
  constructor(private fb: FormBuilder) {
  
  this.apartForm = this.fb.group({
    apartNum: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
    floorNum: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      surface: new FormControl('', Validators.required),
      terrace: ['yes', Validators.required],
      surfaceTerrace: ['', Validators.required],
      category: new FormControl('', Validators.required),
      residence: new FormControl('', Validators.required)

      
  });

 
  }
  listResidences: Residence[] = [
    {
      id: 1,
      name: 'El fel',
      address: 'Borj Cedria',
      image: '../../assets/images/R1.jpg',
      status: 'Disponible',
    },
    {
      id: 2,
      name: 'El yasmine',
      address: 'Ezzahra',
      image: '../../assets/images/R2.jpg',
      status: 'Disponible',
    },
    {
      id: 3,
      name: 'El Arij',
      address: 'Rades',
      image: '../../assets/images/R3.jpg',
      status: 'Vendu',
    },
    {
      id: 4,
      name: 'El Anber',
      address: 'inconnu',
      image: '../../assets/images/R4.jpg',
      status: 'En Construction',
    },
  ];
  onAdd() {
    if (this.apartForm.valid) {
      const newApart = this.apartForm.value;

      console.log(newApart);
    }
  }

  onReset() {
    this.apartForm.reset({
      residence: '',
      apartmentNumber: '',
      floorNumber: '',
      surface: '',
      terrace: 'no',
      surfaceTerrace: { value: '', disabled: true },
      description: ''
    });
  }

}
