import { Component, ChangeDetectionStrategy, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Court } from '../../models/courts';
import * as fromCourts from '../../reducers';
import * as collection from '../../actions/collection-courts'

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard-page.html',
    styleUrls: ['./dashboard-page.scss'],
    changeDetection: ChangeDetectionStrategy.Default,
})
export class DashboardPageComponent implements OnInit {

    courts$: Observable<Court[]>

    constructor(

        private store: Store<fromCourts.State>,
    ) {

        this.courts$ = store.select(fromCourts.getCourtsCollection)
    }

    ngOnInit() {
        // this.courts$.subscribe(d => console.log('Dash Page Collection: ', d));
        this.store.dispatch(new collection.LoadCourts())
    }

}
