import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { AppUser } from 'src/app/models/app-user';
import { Observable, map, switchMap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private auth: AuthService, private userService: UserService) { 
  
  }

  
  /*canActivate()  {
    return this.auth.user$
    .pipe(
      switchMap(user => this.userService.get(user.uid)),
      map(appUser => appUser.isAdmin)
    );
  }*/

  canActivate() : Observable<boolean> {
    return this.auth.user$
    .pipe(
      switchMap(user => this.userService.get(user.uid).valueChanges() as Observable<AppUser>),
      map(user => user.isAdmin)
    )
  }
}
