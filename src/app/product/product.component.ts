import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/services/category.service';
import { Category } from '../models/category';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  imageURL = "\\assets\\salami.jpg"
  categoryDropdownName = "Pick a Category";
  categories$: Observable<{
    key: string | null;
    val: Category | null;
}[]>;

  constructor(categoryService: CategoryService) { 
    this.categories$ = categoryService.getCategories();
  }

  ngOnInit(): void {
  }

  onClickCategory(newName:string){
    this.categoryDropdownName = newName;
  }

}
