import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromCourts from '../../reducers';
import * as courts from '../../actions/court';

@Component({
    selector: 'app-event-modal',
    templateUrl: './event-modal.component.html',
    styleUrls: ['./event-modal.component.scss'],
    changeDetection: ChangeDetectionStrategy.Default,
})
export class EventModalComponent {

    public moment;
    public visible = false;
    public visibleAnimate = false;

    @Input() item: any;

    constructor(
        private store: Store<fromCourts.State>,
    ) {

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

        this.store.dispatch(new courts.AddEvent(courtEventObject));
    }

    // TODO:
        // disable form submit buttod when form not valid

}
