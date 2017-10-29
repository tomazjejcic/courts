// Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DateTimePickerModule } from 'ng-pick-datetime';

// Services
import { ValidateService } from './auth/services/validate.service';
import { AuthService } from './auth/services/auth.service';
import { DashboardService } from './courts/services/dashboard.service';
import { AuthGuard } from './auth/guards/auth.guard';

// Effects
import { CourtsEffects } from './courts/effects/courts';

// Copmonents
import { AppComponent } from './core/containers/app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomePageComponent } from './courts/containers/home/home-page';
import { DashboardPageComponent } from './courts/containers/dashboard/dashboard-page';
import { ProfilePageComponent } from './courts/containers/profile/profile-page';
import { CourtsListComponent } from './courts/components/dashboard/courts-list.component';
import { EventModalComponent } from './courts/components/dashboard/event-modal.component';
import { ItemdashboardComponent } from './courts/components/dashboard/itemdashboard.component';
import { CourtEventComponent } from './courts/components/dashboard/court-event.component';

// Reducers
import { reducers } from './reducers';

const appRoutes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuard]},
    {path: 'profile', component: ProfilePageComponent, canActivate: [AuthGuard]}
]

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        LoginComponent,
        RegisterComponent,
        HomePageComponent,
        DashboardPageComponent,
        ProfilePageComponent,
        CourtsListComponent,
        EventModalComponent,
        ItemdashboardComponent,
        CourtEventComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes),
        HttpModule,
        FormsModule,
        FlashMessagesModule,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([CourtsEffects]),
        DateTimePickerModule
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
