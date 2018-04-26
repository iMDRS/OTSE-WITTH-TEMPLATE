import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {

  constructor(private _router: Router) { }

  authSignOut():void{
        this._router.navigate(['esp_etudiant']);
    }
}
