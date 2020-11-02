import { Injectable } from '@angular/core';

import { switchMap } from 'rxjs/operators';
import { BehaviorSubject, from, Observable } from 'rxjs';

import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private userSubject: BehaviorSubject<Observable<firebase.default.User>> = new BehaviorSubject<Observable<firebase.default.User>>(null);

  user$ = this.userSubject.asObservable().pipe(switchMap((user: Observable<firebase.default.User>) => user));

  constructor(public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  loginEmailPassword(email: string, password: string): Observable<firebase.default.auth.UserCredential> {
    return from(this.afAuth.signInWithEmailAndPassword(email, password));
  }

  userHasToken(): boolean {
    const user: any = JSON.parse(localStorage.getItem('user'));
    const hasToken = user && user.apiKey && user.uid
      ? true
      : false;
    return hasToken;
  }

  getCurrentUser(): firebase.default.User {
    if (this.userHasToken()) {
      return JSON.parse(localStorage.getItem('user'));
    }
    return null;
  }

  logout(): Observable<void> {
    return from(this.afAuth.signOut());
  }
}
