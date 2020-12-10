import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchInputComponent } from './search-input/search-input.component';
import { SettingsComponent } from './settings/settings.component';
import { LoginInfoComponent } from './login-info/login-info.component';
import { MaterialModule } from '../material.module';

@NgModule ({
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [
        SearchInputComponent,
        SettingsComponent,
        LoginInfoComponent 
    ],
    declarations: [
        SearchInputComponent, 
        SettingsComponent, 
        LoginInfoComponent
    ]
})

export class HeaderModule {}