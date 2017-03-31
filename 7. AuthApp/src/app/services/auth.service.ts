// app/auth.service.ts

import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';


// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class Auth {
  opciones: Object = {
    allowedConnections: ["Username-Password-Authentication","google-oauth2"],
    rememberLastLogin: false,
    socialButtonStyle: "big",
    languageDictionary: {"title":"Auth0"},
    language: "es",
    theme: {"primaryColor":"#3A99D8"},
    additionalSignUpFields: [{
      name: "direccion",
      placeholder: "Ingrese su dirección",
      // The following properties are optional
      // icon: "https://example.com/assests/address_icon.png",
      // prefill: "street 123",
      validator: function(direccion) {
        return {
          valid: direccion.length >= 10,
          hint: "La dirección debe de ser mayor a 10 caracteres" // optional
        };
      }
    },
    {
      name: "nombre_completo",
      placeholder: "Ingrese su nombre"
    }]
  };

  // Configure Auth0
  lock = new Auth0Lock('2b85NyR6NJ1PHP098qb3wiWZRP6Rm2Ma', 'luksireiku.eu.auth0.com', this.opciones);

  //Store profile object in auth class
  userProfile: Object;


  constructor(private router: Router) {
    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);

      // Fetch profile information
      this.lock.getProfile(authResult.idToken, (error, profile) => {
        if (error) {
          // Handle error
          alert(error);
          return;
        }

        localStorage.setItem('profile', JSON.stringify(profile));
        this.userProfile = profile;
      });
    });
  }

  public getProfile() {
    if( this.authenticated()){
      return JSON.parse(localStorage.getItem('profile'));
    } else {
      return {};
    }
  }

  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  }

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  }

  public logout() {
    // Remove token from localStorage
    this.router.navigate(['/home']);
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
  }
}
