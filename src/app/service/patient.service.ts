import { Injectable } from '@angular/core';
import { Patient } from "../models/patient/patient";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  constructor(private firestore: AngularFirestore) {}


  createPatient(data: unknown) {
    return new Promise<any>((resolve, reject) =>{
      this.firestore
        .collection('Patient')
        .add(data)
        .then(res => {}, err => reject(err));
    });
  }

  getPatients() {
    return this.firestore.collection('Patient').snapshotChanges();
  }

  deletePatient(data) {
    return this.firestore
      .collection("Patient")
      .doc(data.payload.doc.id)
      .delete();
  }
/*
  updatePatient(patient: Patient, id) {
    return this.firestore
      .collection("Patient")
      .doc(id)
      .update({
        name: patient.name,
        telecom: patient.telecom,
        gender: patient.gender,
        birthDate: patient.birthDate,
        address: patient.address,
      });
  }
  */
  updatePatient(data) {
    return this.firestore
      .collection("Patient")
      .doc(data.payload.doc.id)
      .set({ completed: true }, { merge: true });
  }


}
