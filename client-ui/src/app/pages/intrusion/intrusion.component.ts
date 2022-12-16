import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Intrusion } from 'src/app/classes/Intrusion';
import { Property } from 'src/app/classes/Property';
import { Device } from 'src/app/classes/Device';
import { IntrusionService } from 'src/app/services/intrusion.service';
import { PropertyService } from 'src/app/services/property.service';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-intrusion',
  templateUrl: './intrusion.component.html',
  styleUrls: ['./intrusion.component.css']
})
export class IntrusionComponent implements OnInit {

  public displayedColumns: string[] = []
  public dataSource= new MatTableDataSource<Intrusion>();
  public pageSizeOptions: number[] = []

  public properties = new Map<number, Property>();
  public devices = new Map<number, Device>();

  constructor(private intrusionService : IntrusionService,
              private propertyService : PropertyService,
              private deviceService : DeviceService) { }


  ngOnInit(): void {
    this.displayedColumns = ['Property', 'Timestamp', 'Device', 'download'];
    
    this.getIntrusions();
    
    this.pageSizeOptions = [10, 15]

  }

  getIntrusions() {
    this.getProperties()
    this.getDevices()

    var string_id = localStorage.getItem('owner')
    var id = string_id == null ? 0 : +string_id 

    this.intrusionService.getIntrusionsByOwnerID(id).subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.data.forEach(element => {
        element.building_name = this.properties.get(element.building_id)!.name;
        element.device_type = this.devices.get(element.device_id)!.type;
      });
    })
  }

  getProperties() {
    this.propertyService.getAllProperties().subscribe(data => {
      data.forEach(element => {
        this.properties.set(element.id, element);
      });
    })
  }

  getDevices() {
    this.deviceService.getAllDevices().subscribe(data => {
      data.forEach(element => {
        this.devices.set(element.id, element);
      });
    })
  }
}
