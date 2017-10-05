import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { EventModalComponent } from '../components/event-modal.component';

import { DashboardActions, ICourtState} from '../index';
import { Subject } from 'rxjs/Rx';
// import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'app-itemdashboard',
    templateUrl: './itemdashboard.component.html',
    styleUrls: ['./itemdashboard.component.scss']
})
export class ItemdashboardComponent implements OnInit {

    // private _courtEvents;
    private _courtState: ICourtState;

    public _courtEvents: Subject<any>;

    // @Input() data: Observable<any>;

    @ViewChild('eventModal') eventModal: EventModalComponent;

    @Input() courtItem: any;

    // Court Events

    constructor() {
        this._courtState = DashboardActions.getState();
        this._fetchCourtEvents();
        console.log('COURT EVENTS', this._courtEvents);
        this._courtEvents = this._courtState.data.courtEvents$;

    }

    ngOnInit() {

    }

    private _fetchCourtEvents() {

        console.log('When we HERE? ');

        // this._courtState.data.courtEvents$.subscribe((courtEvents) => {
        //     this._courtEvents = courtEvents;
        // })
    }

    showModal() {

        this.eventModal.show()
    }

}
