import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-event-modal',
    templateUrl: './event-modal.component.html',
    styleUrls: ['./event-modal.component.scss']
})
export class EventModalComponent {

    public visible = false;
    public visibleAnimate = false;

    inputEmail;
    testform;
    moment;

    @Input() item: any;
    @Output() newEvent = new EventEmitter();

    constructor() {

    }

    public show(): void {

        this.visible = true;
        setTimeout(() => this.visibleAnimate = true, 100);
    }

    public hide(): void {

        this.visible = false;
        setTimeout(() => this.visible = false, 300);
    }

    showMoment() {
        console.log('MOMENT: ', this.moment);
    }

    submitEvent() {
        this.hide();

        // construct Court Event Object
        const courtEventObject = {

            db_court_id: this.item._id,
            court_id: this.item.court_id,
            data: {
                time_created: null,
                event_time: {
                    date: this.testform,
                    hour: this.inputEmail
                }
            },
            players: []

        }

        this.newEvent.emit(courtEventObject);
    }

    // TODO:
        // disable form submit buttod when form not valid

}
