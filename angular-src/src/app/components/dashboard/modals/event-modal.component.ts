import { Component, OnInit, ViewChild, Input } from '@angular/core';

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

    ) {

    }

    ngOnInit() {

        console.log('THE ITEM: ', this.item);
    }

    public show(): void {

        this.visible = true;
        setTimeout(() => this.visibleAnimate = true, 100);
    }

    public hide(): void {

        this.visible = false;
        setTimeout(() => this.visible = false, 300);
    }

    onFormSubmit() {

        const filledForm = {
            filedOne: this.inputEmail,
            filedTwo: this.testform,
        }

        console.log('FORM SUBMITTED', filledForm);
    }

    // TODO:
        // disable form submit buttod when form not valid

}
