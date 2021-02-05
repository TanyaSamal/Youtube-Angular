import { User } from "../models/user.model";

export class AuthService {

    private isAuthenticated = false;

    login(user: User): void {
        window.localStorage.setItem('user', JSON.stringify(user));
        this.isAuthenticated = true;
    }

    logout(): void {
        this.isAuthenticated = false;
        window.localStorage.clear();
    }

    isLoggedIn(): boolean {
        return (window.localStorage.getItem('user') !== null) ? true : false;
    }
}