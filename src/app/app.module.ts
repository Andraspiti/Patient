import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { PatientComponent } from './models/patient/patient.component';
import { MatCardModule } from '@angular/material/card';
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment";
import {AngularFirestore, AngularFirestoreModule} from "@angular/fire/firestore";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatChipsModule} from "@angular/material/chips";
import { PregComponent} from "./pages/preg/preg.component";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {CreatePatientComponent} from "./pages/create/create-patient.component";
import { ReadPatientComponent } from "./pages/read/read-patient/read-patient.component";
import {MatTableModule} from "@angular/material/table";
import { PatientCardComponent } from './pages/patient-card/patient-card.component';


@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    PregComponent,
    CreatePatientComponent,
    ReadPatientComponent,
    PatientCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    CommonModule, FormsModule, ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, MatChipsModule,
    MatButtonModule, MatSelectModule, MatTableModule,
  ],

  providers: [PregComponent, ReadPatientComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
