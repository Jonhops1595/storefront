import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Category } from 'src/app/models/category';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  getCategories(){
    return this.db.list<Category>('/categories', query =>
      query.orderByChild('name'))
      .snapshotChanges().pipe(
        map(changes => 
          changes.map(c => ({key: c.payload.key, val: c.payload.val()})))
      );
  }
}
