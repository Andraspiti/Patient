import {Component, OnDestroy, OnInit} from '@angular/core';
import {Gender, Patient} from "./models/patient/patient";
import { ReadPatientComponent } from "./pages/read/read-patient/read-patient.component";
import {Observable, Subscription, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {FbBaseService} from "./service/fb-base.service";
import {FormControl} from "@angular/forms";
import {PatientService } from "./service/patient.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  //  patientExample: Patient = {gender: Gender.unknown, id: "", name: ""};


  title = 'patient';
  patients = this.readPatient.readPatient()
  errorObject = null;

  myControl = new FormControl();
  list$: Observable<Patient[]> | null = null;
  masiklist$: Observable<string[]> | null = null;

  getSub: Subscription | null = null;

  constructor(private readPatient: ReadPatientComponent, private patientService: PatientService) {
/*
    this.patientExample = {
      id: "420",
      name: "Kovacs Bela",
      telecom: "+36202957424",
      gender: Gender.male ,
      birthDate: "2020.03.14",
      address: {
        line: "Fésű utca 42/B",
        city: "Szeged",
        postalCode: 6736,
        country: "Magyarország",
      }
    }
    */
/*
    this.patientExample = { "resourceType": "Patient",
  "id": "example",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t<table>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Name</td>\n\t\t\t\t\t\t<td>Peter James \n              <b>Chalmers</b> (&quot;Jim&quot;)\n            </td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Address</td>\n\t\t\t\t\t\t<td>534 Erewhon, Pleasantville, Vic, 3999</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Contacts</td>\n\t\t\t\t\t\t<td>Home: unknown. Work: (03) 5555 6473</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Id</td>\n\t\t\t\t\t\t<td>MRN: 12345 (Acme Healthcare)</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</div>"
  },
  "identifier": [
    {
      "use": "usual",
      "type": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
            "code": "MR"
          }
        ]
      },
      "system": "urn:oid:1.2.36.146.595.217.0.1",
      "value": "12345",
      "period": {
        "start": "2001-05-06"
      },
      "assigner": {
        "display": "Acme Healthcare"
      }
    }
  ],
  "active": true,
  "name": [
    {
      "use": "official",
      "family": "Chalmers",
      "given": [
        "Peter",
        "James"
      ]
    },
    {
      "use": "usual",
      "given": [
        "Jim"
      ]
    },
    {
      "use": "maiden",
      "family": "Windsor",
      "given": [
        "Peter",
        "James"
      ],
      "period": {
        "end": "2002"
      }
    }
  ],
  "telecom": [
    {
      "use": "home"
    },
    {
      "system": "phone",
      "value": "(03) 5555 6473",
      "use": "work",
      "rank": 1
    },
    {
      "system": "phone",
      "value": "(03) 3410 5613",
      "use": "mobile",
      "rank": 2
    },
    {
      "system": "phone",
      "value": "(03) 5555 8834",
      "use": "old",
      "period": {
        "end": "2014"
      }
    }
  ],
  "gender": "male",
  "birthDate": "1974-12-25",
  "deceasedBoolean": false,
  "address": [
    {
      "use": "home",
      "type": "both",
      "text": "534 Erewhon St PeasantVille, Rainbow, Vic  3999",
      "line": [
        "534 Erewhon St"
      ],
      "city": "PleasantVille",
      "district": "Rainbow",
      "state": "Vic",
      "postalCode": "3999",
      "period": {
        "start": "1974-12-25"
      }
    }
  ]
 ,
  "managingOrganization": {
    "reference": "Organization/1"
  }
}
*/
  }


  ngOnInit() {
    this.get();
  }
  ngOnDestroy() {
    if (this.getSub) {
      this.getSub.unsubscribe();
    }
  }

  get(): void {
    this.errorObject = null;
    this.list$ = this.readPatient.getPatient();

    this.masiklist$ = this.myControl.valueChanges;
  }

}
