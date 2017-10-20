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

    submitEvent() {
        this.hide();

        const eventObject = {
            _id: this.item._id,
            date: this.testform,
            hour: this.inputEmail,
        }

        this.newEvent.emit(eventObject);
    }

    // TODO:
        // disable form submit buttod when form not valid

}
