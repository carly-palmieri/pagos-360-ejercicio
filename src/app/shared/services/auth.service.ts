import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor() {
    // Cargar el estado de autenticación desde localStorage
    const isLoggedIn = !!localStorage.getItem('isLoggedIn');
    this.isLoggedInSubject.next(isLoggedIn);
  }

  logIn() {
    // Guardar el estado de autenticación en localStorage
    localStorage.setItem('isLoggedIn', 'true');
    this.isLoggedInSubject.next(true);
  }

  logOut() {
    // Remover el estado de autenticación de localStorage
    localStorage.removeItem('isLoggedIn');
    this.isLoggedInSubject.next(false);
  }
}
