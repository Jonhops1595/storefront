import { Injectable } from '@angular/core';
import { getAuth, signInWithPopup,GoogleAuthProvider } from 'firebase/auth';



@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor() { }

  GoogleAuth() {
    return this.authThroughGoogle(new GoogleAuthProvider());
  }

  authThroughGoogle(provider: GoogleAuthProvider) {
    let auth = getAuth();

    signInWithPopup(auth,provider)
    .then((result) => {
      console.log('Signed In');
    })
    .catch((error) => {
      console.log('Error');
    })}
}
