import { Component, OnInit } from '@angular/core';
import { PatientService } from "../../service/patient.service";
import { FormBuilder, FormGroup } from '@angular/forms';
import {Address, Gender} from "../../models/patient/patient";
import { getPatientForm } from "../../forms/patient.form";
import {AngularFirestore} from "@angular/fire/firestore";

@Component({
  selector: 'app-create-patient',
  templateUrl: 'create-patient.html',
  styleUrls: ['create-patient.scss']
})

export class CreatePatientComponent implements OnInit{
  //public patientForm: FormGroup;

  form: FormGroup | null = null;

  constructor(private firestore: AngularFirestore){}

  ngOnInit(): void {}


  onSubmit() {

  }
}
