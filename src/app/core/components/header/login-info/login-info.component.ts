import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'ts-login-info',
  templateUrl: './login-info.component.html',
  styleUrls: ['./login-info.component.scss']
})
export class LoginInfoComponent implements OnInit, OnDestroy {

  public isLoggedIn: boolean = false;
  public sub: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.sub = this.authService.isLoggedIn().subscribe(
      data => this.isLoggedIn = data
    );
  }

  public onLogout(): void {
    this.authService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

  public ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
