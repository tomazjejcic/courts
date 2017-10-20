import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'app-courts-list',
    templateUrl: './courts-list.component.html',
    styleUrls: ['./courts-list.component.scss']
})
export class CourtsListComponent  {

    @Input() listData;
    @Output() newEvent = new EventEmitter();

    eventPassed(event) {
        this.newEvent.emit(event);
    }
}
