import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Device } from 'src/app/classes/Device';
import { Intrusion } from 'src/app/classes/Intrusion';
import * as AWS from 'aws-sdk';
import { Buffer } from 'node:buffer';
import { ThemePalette } from '@angular/material/core';



// [FONTE] https://code-maze.com/angular-material-table/ 


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  color: ThemePalette = 'primary';

  @Input() displayedColumns! : any;
  @Input() dataSource! : MatTableDataSource<Intrusion>;

  @Input() displayedColumns_device! : any;
  @Input() dataSource_device! : MatTableDataSource<Device>;

  @Input() pageSizeOptions : number[] = [];

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() { }

  ngOnInit() {
    if (this.pageSizeOptions.length == 0) {
      this.pageSizeOptions = [2,3,4]
    }
  }


  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    this.dataSource_device.sort = this.sort;
    this.dataSource_device.paginator = this.paginator;

  }

  public redirectToDetails = (id: string) => {}
  public redirectToUpdate = (id: string) => {}
  public redirectToDelete = (id: string) => {}

  public doFilter = (e: Event) => {
    let value = (e.target as HTMLInputElement).value
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  public doFilter_device = (e: Event) => {
    let value = (e.target as HTMLInputElement).value
    this.dataSource_device.filter = value.trim().toLocaleLowerCase();
  }

  public downloadVideo(){
    
    var AWS = require('aws-sdk'); 

    AWS.config = new AWS.Config();
    AWS.config.accessKeyId = "AKIAZRPJNMJUHVTW3GGG";
    AWS.config.secretAccessKey = "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";
    AWS.config.region = "eu-west-3";

    var s3 = new AWS.S3();
    


    var params = {
      Bucket: 'video-clips-archive-es007',
      Key: 'record0.mp4'
    };
    
    s3.getObject(params, function(err: { stack: any; }, data: any) {
      if (err){
        console.log(err, err.stack);
      }
      else{
        let blob=new Blob([data.Body], {type: data.ContentType});
        let link=document.createElement('a');
        link.href=window.URL.createObjectURL(blob);
        link.download=params.Key;
        link.click();
      } 
    })
  }
}