import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {Patient} from "../models/patient/patient";

@Injectable({
  providedIn: 'root'
})
export class FbBaseService {

  constructor(private afs: AngularFirestore) { }

  async add(collectionName: string, data: Patient, id?: string): Promise<string> {
    const uid = id ? id : this.afs.createId();
    data.id = uid;
    await this.afs.collection(collectionName).doc(uid).set(data);
    return uid;
  }


  get(collectionName: string){
    return this.afs.collection(collectionName).valueChanges();
  }

}
