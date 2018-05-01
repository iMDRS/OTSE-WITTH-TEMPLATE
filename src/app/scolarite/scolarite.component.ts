import { Component, OnInit } from '@angular/core';
import { ScolariteService } from './scolarite.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-scolarite',
  templateUrl: './scolarite.component.html',
  styleUrls: ['./scolarite.component.css']
})
export class ScolariteComponent implements OnInit {


  constructor(public _serv : ScolariteService) { }

  ngOnInit() {

  }

}
