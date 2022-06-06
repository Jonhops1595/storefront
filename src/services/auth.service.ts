import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Observable, switchMap, map, of } from 'rxjs';
import { AppUser } from 'src/app/models/app-user';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;


  constructor(
    public userService: UserService,
    public auth: AngularFireAuth, 
    private router: Router) { 
    this.user$ = this.auth.authState.pipe(
      map(user => user as firebase.User)
    );
  }

  GoogleAuth() {

    this.router.navigate(['']);
    return this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.auth.signOut();
    this.router.navigate(['']);
  }

  get appUser$() : Observable<AppUser | null> {
    return this.user$.pipe(
      switchMap(user => {
        if(user != null)
          return this.userService.get(user.uid).valueChanges();
        else
          return of(null);
      }))
  }
}


