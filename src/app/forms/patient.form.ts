import { FormGroup, FormControl, } from '@angular/forms';

export function getPatientForm(): FormGroup {
  return new FormGroup({
    name: new FormControl(''),
    telecom: new FormControl(''),
    birthDate: new FormControl(''),
    gender: new FormControl(''),
    address: new FormGroup( {
      line: new FormControl(''),
      city: new FormControl(''),
      postalCode: new FormControl(1),
      country: new FormControl('')
    })
  })



}
