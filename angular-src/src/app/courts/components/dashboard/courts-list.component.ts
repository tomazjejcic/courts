import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';


@Component({
    selector: 'app-courts-list',
    templateUrl: './courts-list.component.html',
    styleUrls: ['./courts-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.Default,
})
export class CourtsListComponent {

    @Input() listData;
    @Output() newEvent = new EventEmitter();

    eventPassed(event) {
        this.newEvent.emit(event);
    }

    get data(){
        return this.listData
    }
}
