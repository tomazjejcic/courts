import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthGuard } from '../auth/guards/auth.guard';

// Effects
import { CourtsEffects } from './effects/courts';
import { CollectionCourtsEffects } from './effects/collection-courts';

// Components
import { DashboardPageComponent } from './containers/dashboard/dashboard-page'
import { GamePageComponent } from '../courts/containers/game/game-page'
import { ComponentsModule } from './components/dashboard';

// Reducers
import { reducers } from './reducers';
import { AuthConfig } from 'angular2-jwt';

@NgModule({
    imports: [
        CommonModule,
        ComponentsModule,
        RouterModule.forChild([
            { path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuard]},
            {
                path: ':id',
                component: GamePageComponent,
                canActivate: [AuthGuard], // TODO: implement something like [GameExistsGuard]
            },
        ]),
        StoreModule.forFeature('courts', reducers),
        EffectsModule.forFeature([CourtsEffects, CollectionCourtsEffects])
    ],
    declarations: [
        DashboardPageComponent,
        GamePageComponent

    ],
    exports: [],
    // providers: [
    //     AuthGuard
    // ]
})
export class CourtsModule {}
