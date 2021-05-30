import { Injectable } from '@angular/core';
import { Patient } from "../models/patient/patient";
import {AngularFirestore, CollectionReference} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import firebase from "firebase";
import Query = firebase.database.Query;

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

  async add(newData: Patient, id?: string): Promise<string>{
    const uid = id ? id: this.firestore.createId();
    newData.id = uid;
    await this.firestore.collection('Patient').doc(uid).set(newData);
    return uid;
  }


  getPatients() {
    return this.firestore.collection('Patient').snapshotChanges();
  }

  get(collectionName: string): Observable<Patient[]> {
    return this.firestore.collection(collectionName, ref => {
      let query: CollectionReference | Query = ref;
      return query;
    }).valueChanges() as Observable<Patient[]>;
  }

  deletePatient(id: string) {
    return this.firestore.collection("Patient").doc(id).delete();
  }


  getById(id: string): Observable<any> {
    return this.firestore.collection('Patient').doc(id).valueChanges();
  }

}
