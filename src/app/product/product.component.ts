import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/services/category.service';
import { ProductService } from 'src/services/product.service';
import { Category } from '../models/category';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  imageURLString = "\\assets\\salami.jpg"
  categoryDropdownName = "Pick a Category";
  categories$: Observable<{
    key: string | null;
    val: Category | null;
}[]>;

  constructor(categoryService: CategoryService ,private productService: ProductService) { 
    this.categories$ = categoryService.getCategories();
  }

  ngOnInit(): void {
  }

  save(product:any){
    this.productService.create(product);
  }

}
