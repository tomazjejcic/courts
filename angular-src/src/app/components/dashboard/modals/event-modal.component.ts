import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { DashboardService } from '../../../services/dashboard.service';

@Component({
    selector: 'app-event-modal',
    templateUrl: './event-modal.component.html',
    styleUrls: ['./event-modal.component.scss']
})
export class EventModalComponent implements OnInit {

    public visible = false;
    public visibleAnimate = false;

    inputEmail;
    testform;

    @Input() item: any;

    constructor(
        private dashboardService: DashboardService
    ) {

    }

    ngOnInit() {

    }

    public show(): void {

        this.visible = true;
        setTimeout(() => this.visibleAnimate = true, 100);
    }

    public hide(): void {

        this.visible = false;
        setTimeout(() => this.visible = false, 300);
    }

    submitEvent() {
        this.hide();

        const eventObject = {
            _id: this.item._id,
            date: this.testform,
            hour: this.inputEmail,
        }

        this.dashboardService.addEvent((eventObject)).subscribe( data => {
            if (data.ok && data.n && data.nModified) {
                console.log('New event created', data);
            } else {
                console.log('Failed to create event', data);
            }
        })
    }

    // TODO:
        // disable form submit buttod when form not valid

}
