import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {

  constructor(private http: Http) { }

  getUser(){
    let data;
    //data = this.http.get('../assets/userData.json')
    data = this.http.get('http://10.98.20.104/trackR/index.php/userprofile?token=$1$rW.PjpFp$md/i/pjuY2ec4BftYYnHs1&uid=2')
    .map((res:Response) => res.json());
    console.log(data);
    return data;
  }

}
