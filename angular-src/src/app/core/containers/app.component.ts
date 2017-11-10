import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as collection from '../../courts/actions/collection-courts';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(

        private _store: Store<any>
    ) {

    }

    ngOnInit() {

        this.initStores();
    }

    initStores() {

        this._store.dispatch(new collection.LoadCourts())
    }

}
