import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'nav-bar',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  username: string;


  constructor() { 
    this.username = "Username";
  }

  ngOnInit(): void {

  }

}
