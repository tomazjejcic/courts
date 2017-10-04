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
    // eventId;

    @Input() item: any;

    constructor(
        private dashboardService: DashboardService
    ) {

    }

    ngOnInit() {

        console.log('THE ITEM: ', this.item);
        // this.formId = this.item._id; // otherwise is a mess??
    }

    public show(): void {

        // this.eventId = this.item._id; // otherwise is a mess??
        this.visible = true;
        setTimeout(() => this.visibleAnimate = true, 100);
        console.log('MODAL Item: ', this.item);
        // console.log('MODAL Item ID ID: ', this.eventId);
    }

    public hide(): void {

        this.visible = false;
        setTimeout(() => this.visible = false, 300);
    }

    onFormSubmit() {

        const eventObject = {
            // _id: this.eventId,
            _id: this.item._id,
            date: this.testform,
            hour: this.inputEmail,
        }

        console.log('Filled OBJECT: ', eventObject);

        this.dashboardService.addEvent((eventObject)).subscribe( data => {
            if (data.ok) {
                console.log('THE DATA', data);
            } else {
                console.log('Error on button', data);
            }
        })

        // console.log('FORM SUBMITTED', filledForm);
    }

    // TODO:
        // disable form submit buttod when form not valid

}
