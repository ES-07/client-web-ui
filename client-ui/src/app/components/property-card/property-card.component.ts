import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Property } from 'src/app/classes/Property';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {
  
  @Input() property_list! : Property[];

  constructor(private router: Router, private modalService: NgbModal) {}

  ngOnInit(): void {
  }

  redirect(id: number){
    this.router.navigate(['property/'+ id]);
  }

  add() {
    let btn = document.getElementById("modal_button");
    btn?.click()
    console.log("clicou")
    // TODO
    // send to parent, to update list
    // generate modal

    // this.property_list.push( {id: 3, name:'Garden'} );
  }


  openVerticallyCentered(content: any) {
		this.modalService.open(content, { centered: true });
	}

}
