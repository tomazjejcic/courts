import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-event-modal',
    templateUrl: './event-modal.component.html',
    styleUrls: ['./event-modal.component.scss']
})
export class EventModalComponent {

    public moment;
    public visible = false;
    public visibleAnimate = false;

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
        this.moment = undefined;
    }

    showMoment() {
        console.log('MOMENT: ', this.moment);
    }

    submitEvent() {

        // construct Court Event Object
        const courtEventObject = {

            db_court_id: this.item._id,
            court_id: this.item.court_id,
            data: {
                time_created: null,
                event_time: this.moment
            },
            players: []
        }

        this.hide();

        this.newEvent.emit(courtEventObject);
    }

    // TODO:
        // disable form submit buttod when form not valid

}
