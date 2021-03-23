import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable()
export class AuthService {

    isLoginSubject = new BehaviorSubject<boolean>(this.hasUser());

    isLoggedIn() : Observable<boolean> {
        return this.isLoginSubject.asObservable();
    }

    login() : void {
        this.isLoginSubject.next(true);
    }

    logout() : void {
        localStorage.removeItem('user');
        this.isLoginSubject.next(false);
      }

    private hasUser() : boolean {
        return (window.localStorage.getItem('user') !== null) ? true : false;
      }

}
