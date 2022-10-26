import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Intrusion } from 'src/app/classes/Intrusion';

@Component({
  selector: 'app-intrusion',
  templateUrl: './intrusion.component.html',
  styleUrls: ['./intrusion.component.css']
})
export class IntrusionComponent implements OnInit {

  public displayedColumns: string[] = []
  public dataSource= new MatTableDataSource<Intrusion>();
  public pageSizeOptions: number[] = []

  constructor() { }


  ngOnInit(): void {
    this.displayedColumns = ['Property', 'Timestamp', 'Device', 'download'];

    this.dataSource.data = [ {id: "1", property: "My house", timestamp: "16/08/2001", device: "camera", video:""}, 
    {id: "2", property: "My house", timestamp: "29/04/2001", device: "camera", video:""},
    {id: "3", property: "Bakery Rodriguez", timestamp: "31/08/2001", device: "sensor", video:""},
    {id: "4", property: "My house", timestamp: "23/01/2001", device: "camera", video:""},
    {id: "5", property: "Bakery Rodriguez", timestamp: "07/08/2001", device: "camera", video:""},
    {id: "6", property: "Bakery Rodriguez", timestamp: "18/08/2001", device: "sensor", video:""}]

    this.pageSizeOptions = [10, 15]
  }

}
