// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';

// Services
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { DashboardService } from './services/dashboard.service';
import { AuthGuard } from './guards/auth.guard';

// Copmonents
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/components/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EventModalComponent } from './components/dashboard/components/event-modal.component';
import { ItemdashboardComponent } from './components/dashboard/components/itemdashboard.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
    {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
]

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent,
        DashboardComponent,
        ProfileComponent,
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
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
