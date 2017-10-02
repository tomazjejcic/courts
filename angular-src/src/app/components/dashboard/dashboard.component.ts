import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    courts: any;

    constructor(
        private authService: AuthService
    ) { }

    ngOnInit() {
        this.getCourtsData();
    }

    getCourtsData() {
        this.authService.getCourts().subscribe(data => {
            console.log('THE DATA: ', data);
            this.courts = data;
        },
        err => {
            console.log(err);
            return false;
        })
    }
}
