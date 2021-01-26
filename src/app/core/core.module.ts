import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchInputComponent } from './components/header/search-input/search-input.component';
import { SettingsComponent } from './components/header/settings/settings.component';
import { LoginInfoComponent } from './components/header/login-info/login-info.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '../material.module';
import { ToggleDirective } from './directives/toggle.directive';

@NgModule ({
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [
        SearchInputComponent,
        SettingsComponent,
        LoginInfoComponent,
        HeaderComponent
    ],
    declarations: [
        SearchInputComponent,
        SettingsComponent,
        LoginInfoComponent,
        HeaderComponent,
        ToggleDirective
    ]
})

export class CoreModule {}
