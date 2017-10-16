import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { DashboardService } from '../../services/dashboard.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard-page.html',
    styleUrls: ['./dashboard-page.scss']
})
export class DashboardPageComponent implements OnInit {

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
            console.log('THE DATA from dashboard service in dashboard component: ', data);
            this.courts = data;
        },
        err => {
            console.log(err);
            return false;
        })
    }
}
