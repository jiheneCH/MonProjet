import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent {
  apartmentForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.apartmentForm = this.fb.group({
      apartNum: ['', Validators.required],
      floorNum: ['', Validators.required],
      surface: ['', Validators.required],
      terrace: [false],
      surfaceterrace: [0],
      category: ['', Validators.required],
      ResidenceId: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.apartmentForm.valid) {
      console.log('Nouvel appartement :', this.apartmentForm.value);
      
    }
  }
}
