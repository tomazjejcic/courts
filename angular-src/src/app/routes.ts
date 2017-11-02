import { Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { HomePageComponent } from './courts/containers/home/home-page';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { ProfilePageComponent } from './courts/containers/profile/profile-page';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        loadChildren: './courts/courts.module#CourtsModule',
        canActivate: [AuthGuard],
    },
    {
        path: 'profile',
        component: ProfilePageComponent,
        canActivate: [AuthGuard],
    },
    {
        path: '**', component: HomePageComponent
    }
    //   { path: '**', component: NotFoundPageComponent }, TODO: implement!
];
