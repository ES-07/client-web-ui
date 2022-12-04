import { Owner } from './../../classes/Owner';
import { Component, OnInit } from '@angular/core';
import { CognitoService } from 'src/app/services/cognito.service';
import { OwnerService } from 'src/app/services/owner.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  owner!:Owner
  editMode!:Boolean
  processing = false;
  form!:FormGroup
  cellphone: string = "";

  
  constructor(private service: OwnerService, private cognito: CognitoService) { }
  
  ngOnInit(): void {
    this.form = new FormGroup({
      cellphone: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      notification_type: new FormControl('', [Validators.required]),
    });

    this.editMode = false
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

edit() {
  this.editMode = true;
}

save(){
  this.processing = true;
  setTimeout(() => {
    this.processing = false;
  }, 500);
  this.editMode = false


  if (this.form.value.notification_type == "" ){
    this.form.value.notification_type = this.owner.notification_type
  }
  else {
    if (this.form.value.notification_type == "Text Message") {
      this.owner.notification_type = "TXT_MSG"
    }
    if (this.form.value.notification_type == "Voice Call") {
      this.owner.notification_type = "VOICE_CALL"
    }
  }

  if (this.form.value.address == "" ){
    this.form.value.address = this.owner.address
  }
  else {
    this.owner.address= this.form.value.address
  }

  if (this.form.value.cellphone == "" ){
    this.form.value.cellphone = this.owner.cellphone
  }
  else {
    this.owner.cellphone= this.form.value.cellphone
  }

  this.service.updateOwner(this.owner.id, this.owner).subscribe(data => 
    this.owner.id = data.id);

}


}
