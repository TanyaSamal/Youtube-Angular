import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material.module';
import { LoginComponent } from './components/login/login.component';


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
    ]
})

export class AuthModule {}
