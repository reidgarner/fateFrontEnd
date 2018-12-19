import { Component, OnInit } from '@angular/core'
import { FateDataService } from '../fate-data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  profiles:Object 

  constructor(private profileData: FateDataService) { }

  ngOnInit() {
    this.getData()
  }

  getData() {
    this.profileData.getData().subscribe(response => {
      this.profiles = response 
    })
  }

}
