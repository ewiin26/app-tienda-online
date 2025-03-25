import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

    firebaseConfig = {
    apiKey: "AIzaSyA-q6ZAhbRslKEhtqhpLe6EeBueYaLDy1s",
    authDomain: "tienda-online-678a6.firebaseapp.com",
    databaseURL: "https://tienda-online-678a6-default-rtdb.firebaseio.com",
    projectId: "tienda-online-678a6",
    storageBucket: "tienda-online-678a6.firebasestorage.app",
    messagingSenderId: "906247948658",
    appId: "1:906247948658:web:7a3497afa7bfd111de75eb"
  };

  public auth: Auth;
  public firebase: Firestore;

  constructor() { 
    const app = initializeApp(this.firebaseConfig);
    this.auth = getAuth(app);
     this.firebase = getFirestore(app);
  }
}
