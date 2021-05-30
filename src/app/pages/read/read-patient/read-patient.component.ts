import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { PatientService } from "../../../service/patient.service";
import {AngularFirestore} from "@angular/fire/firestore";
import {PatientCardComponent} from "../../patient-card/patient-card.component";
import {Observable} from "rxjs";
import {Patient} from "../../../models/patient/patient";


@Component({
  selector: 'app-read-patient',
  templateUrl: './read-patient.component.html',
  styleUrls: ['./read-patient.component.scss']
})
export class ReadPatientComponent implements OnInit {

  constructor(private patientService: PatientService, private afs: AngularFirestore) { }

  patientList: Observable<Patient[]> | null = null;
  patients;
  ngOnInit(): void {

    //this.readPatient();
   // this.getPatient();
  }
  //this.ordersService.getCoffeeOrders().subscribe(res =>(this.coffeeOrders = res));
  readPatient = () => this.patientService.getPatients().subscribe(res => (this.patients = res));

  getPatient() {
    return this.patientList = this.patientService.get('Patient');
  }

  deleteOrder = data => this.patientService.deletePatient(data);

  //markCompleted = data => this.patientService.updatePatient(data);



}
