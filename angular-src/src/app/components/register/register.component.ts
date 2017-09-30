import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    name: String;
    username: String;
    email: String;
    password: String;

    constructor(
        private router: Router,
        private flashMessage: FlashMessagesService,
        private validateService: ValidateService,
        private authService: AuthService
    ) { }

    ngOnInit() {
    }

    onRegisterSubmit() {

        const user = {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password
        }

        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000})
            return false;
        }

        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 3000})
            return false;
        }

        // Register User
        this.authService.registerUser(user).subscribe(data => {
            if (data.success) {
                this.flashMessage.show('You are now registered and can log in', {cssClass: 'alert-success', timeout: 3000});
                this.router.navigate(['/login']);
            } else {
                this.flashMessage.show('Something went wrong with your registration', {cssClass: 'alert-danger', timeout: 3000})
                this.router.navigate(['/register']);
            }
        })
    }

}
