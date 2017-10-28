import { Injectable } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';
import { CourtEvent } from '../models/courts';

@Injectable()
export class DashboardService {

    authToken;

    constructor(
        private authService: AuthService,
        private http: Http
    ) { }

    // get courts with events in dashboard
    getCourtsWithEvents() {
        const headers = new Headers();
        this.authService.loadToken();
        this.authToken = this.authService.authToken;

        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/users/dashboard', {headers: headers})
            .map(res => res.json());
    }

    createNewEvent(event: string): Observable<CourtEvent[]> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/createevent', event, {headers: headers})
            .map(res => res.json() || []);
    }

}
