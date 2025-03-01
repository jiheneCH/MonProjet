import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent {
  residenceForm!:FormGroup;


  ngOnInit(){

    this.residenceForm= new FormGroup({
      name: new FormControl('', [Validators.required,Validators.pattern("^[A-Z][a-z]+$")]),
      address: new FormControl('',[Validators.required,Validators.minLength(15),Validators.maxLength(50)]),
      status: new FormControl('',Validators.required),
      image: new FormControl('',Validators.required),
  
    })
  }

  onSubmit(){
    return console.log(this.residenceForm.value)
  }


  get name(){
    return this.residenceForm.get('name')
  }

  test(){
    return console.log(this.residenceForm.get('name')?.value)
  }
}
