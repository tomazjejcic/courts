import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { EventModalComponent } from './event-modal.component';

import { DashboardActions, ICourtState} from '../../index';
import { Subject } from 'rxjs/Rx';
// import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'app-itemdashboard',
    templateUrl: './itemdashboard.component.html',
    styleUrls: ['./itemdashboard.component.scss']
})
export class ItemdashboardComponent implements OnInit {

    @ViewChild('eventModal') eventModal: EventModalComponent;

    @Input() courtItem: any;

    constructor() {

    }

    ngOnInit() {

    }

    showModal() {

        this.eventModal.show()
    }

}
