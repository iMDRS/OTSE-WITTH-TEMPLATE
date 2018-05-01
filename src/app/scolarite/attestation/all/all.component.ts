import { Component, OnInit } from '@angular/core';
import { ScolariteService } from '../../scolarite.service';
import { demande } from '../../demande';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  t='border';
  dem : demande [];
  constructor(public _serv : ScolariteService) { }

  ngOnInit() {
    this._serv.getDemande()
   .subscribe(
       dem => (this.dem = dem)
   );
  }

}
