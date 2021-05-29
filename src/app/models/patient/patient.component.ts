import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Patient } from "./patient";

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent{
  @Input() patient: Patient | null = null;
  @Output() edit = new EventEmitter<Patient>();

}
