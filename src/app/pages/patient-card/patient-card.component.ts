import {Component, Input, OnInit} from '@angular/core';
import {Patient} from "../../models/patient/patient";
import {PatientService} from "../../service/patient.service";

@Component({
  selector: 'app-patient-card',
  templateUrl: './patient-card.component.html',
  styleUrls: ['./patient-card.component.scss']
})
export class PatientCardComponent implements OnInit {
  @Input() patient?: Patient;


  constructor(private patientService: PatientService) { }

  onClick(id){
    this.patientService.deletePatient(id);
  }

  ngOnInit(): void {
  }

}
