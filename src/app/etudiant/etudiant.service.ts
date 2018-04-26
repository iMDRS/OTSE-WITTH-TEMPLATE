import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
import {HttpClient} from "@angular/common/http";
import * as _ from 'lodash';





@Injectable()
export class EtudiantService {

  constructor(private http:HttpClient) {}

    ngOnInit() {

    }

}
