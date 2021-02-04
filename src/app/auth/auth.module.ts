import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material.module';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';


@NgModule ({
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule,
        ReactiveFormsModule, 
        FormsModule
    ],
    exports: [
        LoginComponent
    ],
    declarations: [
        LoginComponent
    ],
    providers: [
        AuthService
    ]
})

export class AuthModule {}