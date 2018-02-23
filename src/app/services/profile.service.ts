import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {
  param1;
  param2;

  constructor(private http: Http) { }

  userToken(usrToken, uId){
    this.param1=usrToken;
    this.param2 = uId;
  }

  getUser(){
    return this.http.get('http://10.98.20.104/trackR/index.php/userprofile?token=' + this.param1 + '&uid=' + this.param2)
    .map((res:Response) => res.json());
  }
}
