import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { PatientService } from "../../../service/patient.service";
import { MatTableDataSource } from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {AngularFirestore} from "@angular/fire/firestore";

@Component({
  selector: 'app-read-patient',
  templateUrl: './read-patient.component.html',
  styleUrls: ['./read-patient.component.scss']
})
export class ReadPatientComponent implements OnInit {

  constructor(private patientService: PatientService, private afs: AngularFirestore) { }

  displayedColumns = ['1', '2', '3', '4', '5', '6', '7', '8'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatSort) sort: MatSort;
  patients;
  ngOnInit(): void {
   /* this.afs.collection('Patient').valueChanges().subscribe(data => {

      this.dataSource.sort = this.sort;
    })
    */

    this.dataSource = new MatTableDataSource();
    this.readPatient();
  }
  //this.ordersService.getCoffeeOrders().subscribe(res =>(this.coffeeOrders = res));
  readPatient = () => this.patientService.getPatients().subscribe(res => (this.patients = res));

  deleteOrder = data => this.patientService.deletePatient(data);

  markCompleted = data => this.patientService.updatePatient(data);
}
