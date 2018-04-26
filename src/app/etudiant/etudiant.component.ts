import { Component, OnInit } from '@angular/core';
import { EtudiantService } from './etudiant.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

  constructor(private es:EtudiantService) {
    }

  ngOnInit() {

  }

}
