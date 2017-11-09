import { Component, OnInit, ViewChild, Input, ChangeDetectionStrategy } from '@angular/core';
import { EventModalComponent } from './event-modal.component';

@Component({
    selector: 'app-itemdashboard',
    templateUrl: './itemdashboard.component.html',
    styleUrls: ['./itemdashboard.component.scss'],
    changeDetection: ChangeDetectionStrategy.Default,
})
export class ItemdashboardComponent {

    @ViewChild('eventModal') eventModal: EventModalComponent;

    @Input() courtItem: any;

    constructor() {

    }

    showModal() {

        this.eventModal.show()
    }

}
