import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentByResidenceComponent } from './apartment-by-residence.component';

describe('ApartmentByResidenceComponent', () => {
  let component: ApartmentByResidenceComponent;
  let fixture: ComponentFixture<ApartmentByResidenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApartmentByResidenceComponent]
    });
    fixture = TestBed.createComponent(ApartmentByResidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
