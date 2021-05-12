import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit{
  sideBarOpen = true;
  constructor() { }
  ngOnInit() {
  }
  sideBarToggler(){
    //set side bar Open = to opposite value
    this.sideBarOpen = !this.sideBarOpen;
  }
}
