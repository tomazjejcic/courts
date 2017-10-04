import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { EventModalComponent } from '../components/event-modal.component';

@Component({
    selector: 'app-itemdashboard',
    templateUrl: './itemdashboard.component.html',
    styleUrls: ['./itemdashboard.component.scss']
})
export class ItemdashboardComponent implements OnInit {

    @ViewChild('eventModal') eventModal: EventModalComponent;

    @Input() courtItem: any;

    // Court Events

    constructor() { }

    ngOnInit() {

    }

    showModal() {

        this.eventModal.show()
    }

}
