import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Observable, filter, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;


  constructor(public auth: AngularFireAuth, private router: Router) { 
    this.user$ = this.auth.authState.pipe(
      map(user => user as firebase.User)
    );
  }

  GoogleAuth() {

    this.router.navigate(['']);
    console.log("Test");

    return this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.auth.signOut();
  }
}


