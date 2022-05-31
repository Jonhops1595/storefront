import { Component} from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-firestore-test',
  templateUrl: './firestore-test.component.html',
  styleUrls: ['./firestore-test.component.css']
})
export class FirestoreTestComponent  {
  items: Observable<any[]>;
  constructor(firestore: AngularFirestore) { 
    this.items = firestore.collection('items').valueChanges();
  }


}
