import { Component, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'nav-bar',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(public authService: AuthService) { 
  }

  logout(){
    this.authService.logout();
  }



}
