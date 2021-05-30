import {Component} from '@angular/core';
import {Form, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Gender, Patient} from "../../models/patient/patient";
import {AngularFirestore} from "@angular/fire/firestore";

import { PatientService } from "../../service/patient.service";

export const PATIENTS: Patient[] = [];


@Component({
  selector: 'app-preg',
  templateUrl: './preg.component.html',
  styleUrls: ['./preg.component.scss']
})
export class PregComponent{
  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    telecom: new FormControl(''),
    birthDate: new FormControl(''),
    gender: new FormControl('', Validators.required),
    address: new FormGroup({
      line: new FormControl(''),
      city: new FormControl(''),
      postalCode: new FormControl(1),
      country: new FormControl('')
    })
  })

  onSubmit(): void {
    const patients = PATIENTS.map((obj)=> {return Object.assign({}, obj)})
    this.error = false;
    if(this.form.valid){
      patients.push(this.form.value)
      console.log(this.form.value);
      this.patientService.add(this.form.value)
      //this.createPatient(this.form.value);
    }
    this.error = true;
  }

  error = false;
  constructor(private firestore: AngularFirestore, private patientService: PatientService) {}
  genders= Object.keys(Gender);

  getPatients() {
    return this.firestore.collection('Patient').snapshotChanges();
  }


/*
  async create(newData: Patient): Promise<any>{
    const documentId = this.firestore.createId();

    return this.firestore.collection('Patient').add(newData)
  }
*/

}
