import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-courts-list',
    templateUrl: './courts-list.component.html',
    styleUrls: ['./courts-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.Default,
})
export class CourtsListComponent {

    @Input() listData;

    get data(){
        return this.listData
    }
}
