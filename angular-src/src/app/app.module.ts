// Modules
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { Store, StoreModule } from '@ngrx/store';
import {
    StoreRouterConnectingModule,
    RouterStateSerializer
  } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Services
import { ValidateService } from './auth/services/validate.service';
import { AuthService } from './auth/services/auth.service';
import { DashboardService } from './courts/services/dashboard.service';
import { AuthGuard } from './auth/guards/auth.guard';

import { CourtsModule } from './courts/courts.module'

// Copmonents
import { AppComponent } from './core/containers/app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomePageComponent } from './courts/containers/home/home-page';
import { ProfilePageComponent } from './courts/containers/profile/profile-page';

// Reducers
import { reducers } from './reducers';

// Routes
import { routes } from './routes';

// Utils
import { CustomRouterStateSerializer } from './shared/utils';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        LoginComponent,
        RegisterComponent,
        HomePageComponent,
        ProfilePageComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        RouterModule.forRoot(routes, { useHash: true }),
        HttpModule,
        FormsModule,
        FlashMessagesModule,
        CourtsModule,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([]),
        StoreDevtoolsModule.instrument({
            maxAge: 25
        }),
        StoreRouterConnectingModule,
    ],
    providers: [
        ValidateService,
        AuthService,
        DashboardService,
        AuthGuard,
        {provide: RouterStateSerializer, useClass: CustomRouterStateSerializer}
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
