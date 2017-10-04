import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DashboardService {

    authToken;

    constructor(
        private authService: AuthService,
        private http: Http
    ) { }

    // get courts in dashboard
    getCourts() {
        const headers = new Headers();
        this.authService.loadToken();
        this.authToken = this.authService.authToken;

        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/users/dashboard', {headers: headers})
            .map(res => res.json());
    }

    // add event to court
    addEvent(eventObject) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/addevent', eventObject, {headers: headers})
            .map(res => res.json());
    }

}
