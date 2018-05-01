import { Component, OnInit, Input } from '@angular/core';
import { ScolariteService } from '../scolarite.service';
import { demande } from '../demande';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-attestation',
  templateUrl: './attestation.component.html',
  styleUrls: ['./attestation.component.css']
})
export class AttestationComponent implements OnInit {

  constructor(public _serv : ScolariteService) { }

  ngOnInit() {
  //  setInterval( () => {



    //}, 2000);

  }

}
