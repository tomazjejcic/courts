import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { DashboardService } from '../../../services/dashboard.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    courts: any;

    constructor(
        private authService: AuthService,
        private dashboardService: DashboardService
    ) { }

    ngOnInit() {

        this.getCourtsData();
    }

    getCourtsData() {

        this.dashboardService.getCourts().subscribe( data => {
            console.log('THE DATA from dashboard service: ', data);
            this.courts = data;
        },
        err => {
            console.log(err);
            return false;
        })
    }
}
