import { Component, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { AppUser } from '../models/app-user';

@Component({
  selector: 'nav-bar',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  appUser: AppUser | null = null;

  constructor(public authService: AuthService) { 
    authService.appUser$.subscribe(appUser => this.appUser = appUser);
  }

  logout(){
    this.authService.logout();
  }



}
