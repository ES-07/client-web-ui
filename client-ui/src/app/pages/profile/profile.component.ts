import { Owner } from './../../classes/Owner';
import { Component, OnInit } from '@angular/core';
import { CognitoService } from 'src/app/services/cognito.service';
import { OwnerService } from 'src/app/services/owner.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  owner!:Owner

  constructor(private service: OwnerService, private cognito: CognitoService) { }
 
  ngOnInit(): void {

    var cognito_id = localStorage.getItem('cognito_id');
    if (cognito_id == null) return

    this.service.getOwnerByID(cognito_id).subscribe((info) => {
      this.owner = info;

      if (this.owner.notification_type == "TXT_MSG") {
        this.owner.notification_type = "Text Message"
      }

      if (this.owner.notification_type == "VOICE_CALL") {
        this.owner.notification_type = "Voice Call"
      }

    });  

}

}
