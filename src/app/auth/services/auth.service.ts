import { User } from '../models/user.model';

export class AuthService {

    private isAuthenticated: boolean = false;

    public login(user: User): void {
        window.localStorage.setItem('user', JSON.stringify(user));
        this.isAuthenticated = true;
    }

    public logout(): void {
        this.isAuthenticated = false;
        window.localStorage.clear();
    }

    public isLoggedIn(): boolean {
        return (window.localStorage.getItem('user') !== null) ? true : false;
    }
}
