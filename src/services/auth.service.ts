import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Observable, switchMap, map } from 'rxjs';
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
  }

  get appUser$() : Observable<AppUser> {
    return this.user$.pipe(
      switchMap(user => this.userService.get(user.uid).valueChanges() as Observable<AppUser>),
    )
  }
}


