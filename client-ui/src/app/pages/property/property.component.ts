import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Device } from 'src/app/classes/Device';
import { Intrusion } from 'src/app/classes/Intrusion';
import { Property } from 'src/app/classes/Property';
import { DeviceService } from 'src/app/services/device.service';
import { IntrusionService } from 'src/app/services/intrusion.service';
import { PropertyService } from 'src/app/services/property.service';


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

  public properties = new Map<number, Property>();
  public devices = new Map<number, Device>();

  public property! : Property;


  constructor(private router: Router, private service: IntrusionService,   private propertyService : PropertyService, private deviceService : DeviceService) { }

  ngOnInit(): void {

    this.displayedColumns_intrusion = ['Property', 'Timestamp', 'Device', 'download'];

    var property_id =  +this.router.url.split("/").slice(-1)[0]

    this.getProperties(property_id);
    this.getDevices();

    var string_id = localStorage.getItem('owner')
    var id = string_id == null ? 0 : +string_id 

    this.service.getIntrusionsByOwnerID(id).subscribe(data => {
      var lst : Intrusion[] = []
      var all_intrusions : Intrusion[] = data

      all_intrusions.forEach((e) => {
        if (e.building_id == property_id) lst.push(e)
      })

      this.dataSource_intrusion.data = lst

      this.dataSource_intrusion.data.forEach(element => {
        element.building_name = this.properties.get(element.building_id)!.name;
        element.device_type = this.devices.get(element.device_id)!.type;
      });
    })


    this.displayedColumns_device = ['Property', 'Device', 'Specifications', 'Status'];

    this.deviceService.getDevicesByBuildingID(property_id).subscribe(data => {
      this.dataSource_device.data = data

      this.dataSource_device.data.forEach(element => {
        element.building_name = this.properties.get(element.building_id)!.name;
      });
    })

    
  }


  getProperties(id: number) {
    this.propertyService.getAllProperties().subscribe(data => {
      data.forEach(element => {
        this.properties.set(element.id, element);
        if (id == element.id) {this.property = element }
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
