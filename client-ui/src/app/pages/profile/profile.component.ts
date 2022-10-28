import { Owner } from './../../classes/Owner';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private service: ProfileService 

  ) { }

  owner!:Owner

  
  ngOnInit(): void {

    this.service.getOwnerData().subscribe((info) => {
      this.owner = info;
      console.log(this.owner);
      if (this.owner.notification_type == "TXT_MSG"){
        this.owner.notification_type = "Text Message"
      }
      if (this.owner.notification_type == "VOICE_CALL"){
        this.owner.notification_type = "Voice Call"
      }

    }); 

 

}

}
