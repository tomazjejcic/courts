import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CourtEvent } from '../../models/courts';
import format from 'date-fns/format/index.js';

@Component({
    selector: 'app-court-event',
    templateUrl: './court-event.component.html',
    styleUrls: ['./court-event.component.scss'],
    changeDetection: ChangeDetectionStrategy.Default,
})
export class CourtEventComponent implements OnInit {

    @Input() courtEvent: CourtEvent;

    private _date;
    private _time;

    constructor() {

    }

    ngOnInit() {
        const ts = this.courtEvent.data.event_time;
        this._date = format(ts, 'DD/MMM/YYYY');
        this._time = format(ts, 'HH:mm');
    }

    get id() {
        return this.courtEvent._id;
      }
}
