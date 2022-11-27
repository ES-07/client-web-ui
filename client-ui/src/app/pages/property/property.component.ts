import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Device } from 'src/app/classes/Device';
import { Intrusion } from 'src/app/classes/Intrusion';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  public displayedColumns_intrusion: string[] = []
  public dataSource_intrusion= new MatTableDataSource<Intrusion>();

  public displayedColumns_device: string[] = []
  public dataSource_device= new MatTableDataSource<Device>();


  constructor(private router: Router) { }

  ngOnInit(): void {

    this.displayedColumns_intrusion = ['Property', 'Timestamp', 'Device', 'download'];

    var property_id =  +this.router.url.split("/").slice(-1)[0]

    /* if (property_id == 1) {
      this.dataSource_intrusion.data = [ {id: "1", property: "My house", timestamp: "16/08/2001", device: "camera", video:""}, 
      {id: "2", property: "My house", timestamp: "29/04/2001", device: "camera", video:""},
      {id: "4", property: "My house", timestamp: "desculpa ricardo", device: "camera", video:""}]

    } else if (property_id == 2) {
      this.dataSource_intrusion.data = [{id: "3", property: "Bakery Rodriguez", timestamp: "31/08/2001", device: "sensor", video:""},
      {id: "5", property: "Bakery Rodriguez", timestamp: "07/08/2001", device: "camera", video:""},
      {id: "6", property: "Bakery Rodriguez", timestamp: "18/08/2001", device: "sensor", video:""}]
    } */


    this.displayedColumns_device = ['Property', 'Device', 'Date', 'Status'];
    /* if (property_id == 1) {
      this.dataSource_device.data = [ {id: "1", status: "on", date: "16/08/2001", type: "camera",  property: "My house"}, 
      {id: "2", status: "on", date: "29/04/2001", type: "sensor",  property: "My house"}]


    } else if (property_id == 2) {
      this.dataSource_device.data = [{id: "4", status: "off", date: "23/01/2001", type: "camera",  property: "Bakery Rodriguez"}]
    } */
  }

}
