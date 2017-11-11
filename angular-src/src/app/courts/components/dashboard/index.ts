import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DateTimePickerModule } from 'ng-pick-datetime';
import { FormsModule } from '@angular/forms';
import { CourtsListComponent } from './courts-list.component';
import { EventModalComponent } from './event-modal.component';
import { ItemdashboardComponent } from './itemdashboard.component';
import { CourtEventComponent } from './court-event.component';

export const COMPONENTS = [
    CourtsListComponent,
    EventModalComponent,
    ItemdashboardComponent,
    CourtEventComponent
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        DateTimePickerModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class ComponentsModule {}
