import { Component, OnInit, ViewChild, Input, ChangeDetectionStrategy } from '@angular/core';
import { EventModalComponent } from './event-modal.component';
import { Store } from '@ngrx/store';
import * as fromCourts from '../../reducers';
import * as courts from '../../actions/court';

@Component({
    selector: 'app-itemdashboard',
    templateUrl: './itemdashboard.component.html',
    styleUrls: ['./itemdashboard.component.scss'],
    changeDetection: ChangeDetectionStrategy.Default,
})
export class ItemdashboardComponent {

    @ViewChild('eventModal') eventModal: EventModalComponent;

    @Input() courtItem: any;

    constructor(
        private store: Store<fromCourts.State>,
    ) {

    }

    showModal() {

        this.eventModal.show()
    }

    eventCreated(event) {

        this.store.dispatch(new courts.AddEvent(event));
    }

}
