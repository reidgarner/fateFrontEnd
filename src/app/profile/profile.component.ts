import { Component, OnInit } from '@angular/core';
import { FateDataService } from '../fate-data.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profiles:Object 
  profile_id:any 

  constructor(private profileData: FateDataService, route: ActivatedRoute) { 
    this.profile_id = route.snapshot.params['id'];
  }

  ngOnInit() {
    this.getData()
  }

  getData() {
    this.profileData.getData().subscribe(response => {
      this.profiles = response 
    })
  }
}
