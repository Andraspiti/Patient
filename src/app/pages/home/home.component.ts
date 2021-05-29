import { Component, OnInit } from '@angular/core';
import {FbBaseService} from "../../service/fb-base.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  constructor(private service: FbBaseService) { }

  ngOnInit(): void {
    this.getPatients();
  }

  getPatients(){
    this.service.get('patients').subscribe(patients => {

      console.log(patients);
    });
  }


}
