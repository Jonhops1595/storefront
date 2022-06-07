import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  imageURL = "\\assets\\salami.jpg"
  categories = ["Breakfast", "Lunch", "Dinner"];

  constructor() { }

  ngOnInit(): void {
  }

}
