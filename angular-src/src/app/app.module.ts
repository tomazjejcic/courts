// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';

// Services
import { ValidateService } from './auth/services/validate.service';
import { AuthService } from './auth/services/auth.service';
import { DashboardService } from './courts/services/dashboard.service';
import { AuthGuard } from './auth/guards/auth.guard';

import { DashboardActions, DashboardStore } from './courts/index';

// Copmonents
import { AppComponent } from './core/containers/app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomePageComponent } from './courts/containers/home/home-page';
import { DashboardPageComponent } from './courts/containers/dashboard/dashboard-page';
import { NgrxPageComponent } from './courts/containers/ngrx/ngrx-page';
import { ProfilePageComponent } from './courts/containers/profile/profile-page';
import { EventModalComponent } from './courts/components/dashboard/event-modal.component';
import { ItemdashboardComponent } from './courts/components/dashboard/itemdashboard.component';

const appRoutes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuard]},
    {path: 'profile', component: ProfilePageComponent, canActivate: [AuthGuard]},
    {path: 'ngrx', component: NgrxPageComponent, canActivate: [AuthGuard]},
]

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        LoginComponent,
        RegisterComponent,
        HomePageComponent,
        DashboardPageComponent,
        NgrxPageComponent,
        ProfilePageComponent,
        EventModalComponent,
        ItemdashboardComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        HttpModule,
        FormsModule,
        FlashMessagesModule
    ],
    providers: [
        ValidateService,
        AuthService,
        DashboardService,
        AuthGuard,
        DashboardActions,
        DashboardStore
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
