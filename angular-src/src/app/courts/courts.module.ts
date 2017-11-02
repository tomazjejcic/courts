import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthGuard } from '../auth/guards/auth.guard';

import { CourtsEffects } from './effects/courts';

// Components
import { DashboardPageComponent } from './containers/dashboard/dashboard-page'
import { ComponentsModule } from './components/dashboard';

import { reducers } from './reducers';

@NgModule({
    imports: [
        CommonModule,
        ComponentsModule,
        RouterModule.forChild([
            { path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuard]},
        ]),
        StoreModule.forFeature('courts', reducers),
        EffectsModule.forFeature([CourtsEffects])
    ],
    declarations: [
        DashboardPageComponent,

    ],
    exports: [],
    // providers: [
    //     AuthGuard
    // ]
})
export class CourtsModule {}
