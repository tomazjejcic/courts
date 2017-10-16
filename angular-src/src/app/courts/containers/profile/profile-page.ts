import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile-page.html',
    styleUrls: ['./profile-page.scss']
})
export class ProfilePageComponent implements OnInit {

    user: Object;

    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    ngOnInit() {
        this.authService.getProfile().subscribe(profile => {
            this.user = profile.user;
        },
        err => {
            console.log(err);
            return false;
        })
    }

}
