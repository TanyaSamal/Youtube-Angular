import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'ts-login-info',
  templateUrl: './login-info.component.html',
  styleUrls: ['./login-info.component.scss']
})
export class LoginInfoComponent {

  public isLoggedIn: Observable<boolean>;

  constructor(private authService: AuthService) { 
    this.isLoggedIn = authService.isLoggedIn();
  }

}
