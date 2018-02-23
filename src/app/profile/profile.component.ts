import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  constructor(private _profileService: ProfileService) { }

  items:string;

  ngOnInit() {
    let param1 = '$1$2SLpMOO/$6bT9XJ1hvx.Cya/PbAE3n/';
    let param2 = '2';    
    this._profileService.userToken(param1, param2);
    console.log(param1 + param2);
    
    this._profileService.getUser().subscribe(data => this.items = data);
  }

}
