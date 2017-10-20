import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { EventModalComponent } from './event-modal.component';

@Component({
    selector: 'app-itemdashboard',
    templateUrl: './itemdashboard.component.html',
    styleUrls: ['./itemdashboard.component.scss']
})
export class ItemdashboardComponent {

    @ViewChild('eventModal') eventModal: EventModalComponent;

    @Input() courtItem: any;
    @Output() newEvent = new EventEmitter();

    constructor() {

    }

    showModal() {

        this.eventModal.show()
    }

    eventCreated(event) {
        this.newEvent.emit(event);
    }

}
