import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/classes/Property';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  properties : Property[] = [
    {id: 1, name:'My House'},
    {id: 2, name:'Bakery Rodriguez'},
  ];

}
