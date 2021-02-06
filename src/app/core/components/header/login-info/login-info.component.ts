import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'ts-login-info',
  templateUrl: './login-info.component.html',
  styleUrls: ['./login-info.component.scss']
})
export class LoginInfoComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  public ngOnInit(): void {
  }

  public onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
