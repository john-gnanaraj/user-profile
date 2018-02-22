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
    this._profileService.getUser().subscribe(data => this.items = data);
  }

}
