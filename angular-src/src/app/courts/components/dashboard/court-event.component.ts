import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import format from 'date-fns/format/index.js'

@Component({
    selector: 'app-court-event',
    templateUrl: './court-event.component.html',
    styleUrls: ['./court-event.component.scss']
})
export class CourtEventComponent implements OnInit {


    @Input() courtEvent: any;

    private _date;
    private _time;

    constructor() {

    }

    ngOnInit() {
        const ts = this.courtEvent.data.event_time;
        this._date = format(ts, 'DD/MMM/YYYY');
        this._time = format(ts, 'HH:mm');
    }
}
