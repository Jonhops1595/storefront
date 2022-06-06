import { Component } from '@angular/core';
import { AuthService } from 'src/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {

  constructor(public authService: AuthService) { }


  login() {
    this.authService.GoogleAuth();
  }

}