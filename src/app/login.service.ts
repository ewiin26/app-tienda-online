import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from './firebase.service';
import { signInWithEmailAndPassword } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  token: string|null = null ;

  constructor(
    private router: Router,
    private firebaseServicio: FirebaseService
  ) { }

  login(email: string, password: string) {
    const auth = this.firebaseServicio.auth;

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        auth.currentUser?.getIdToken().then((token) => {
          this.token = token;
          this.router.navigate(['/']);
        });
      })
      .catch((error) => {
        console.error('Error al iniciar sesion:', error);
      });

  }

  getIdToken() {
    return this.token;
  }

  // Método que verifica si el usuario está autenticado

  isAutenticado() {
    return this.token != null;
  }

  // Método para cerrar sesión
  logout() {
    const auth = this.firebaseServicio.auth;
    auth.
      signOut()
      .then(() => {
        this.token = null;
        this.router.navigate(['login'])
      })
      .catch((error) => console.log('error logout: ' + error))
  }
} 