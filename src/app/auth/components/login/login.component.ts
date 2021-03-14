import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'ts-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  public hide: boolean = true;
  public email: FormControl = new FormControl('', [Validators.required, Validators.email]);
  public password: FormControl = new FormControl('');

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  public ngOnInit(): void {
  }

  public getErrorMessage(): string {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  public onSubmit(): void {
    let user: User = Object.assign({});
    user.email = this.email.value;
    user.password = this.password.value;
    this.authService.login(user);
    this.router.navigate(['/ok']);
  }

}
