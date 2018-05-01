import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Response } from '@angular/http';
import { demande } from './demande';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';

@Injectable()
export class ScolariteService {

  private url = "http://localhost/phpScript/test.php";

  constructor(private _http:HttpClient) { }

  getDemandes(): Observable<demande[]>{
       return this._http.get(this.url).map((response: Response) => response.records)
                .do(console.log);
   }
/*  getDemande(): Observable<demande[]>{
       return this._http.post(this.url,{'type':'attestation','statu':'dem'}).map((response: Response) => response.records)
                .do(console.log);
   }*/
  getDemande(): Observable<demande[]>{
       return this._http.post(this.url,{type:'attestation',statu:'dem'}).map((response: Response) => response.records)
                .do(console.log);
   }
}
