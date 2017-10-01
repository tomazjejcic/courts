import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

    authToken: any;
    user: any;

    constructor(
        private http: Http
    ) { }

    // register user to backend api
    registerUser(user) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/register', user, {headers: headers})
            .map(res => res.json());
    }

    // authenticate user
    authenticateUser(user) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/authenticate', user, {headers: headers})
            .map(res => res.json());
    }

    getProfile() {
        const headers = new Headers();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/users/profile', {headers: headers})
            .map(res => res.json());
    }

    // store user on successful loggin
    storeUserData(token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user)); // localstorage can only store strings

        this.authToken = token;
        this.user = user;
    }

    // load token
    loadToken() {
        const token = localStorage.getItem('id_token');
        this.authToken = token;
    }

    // checked if logged in for protected routes
    loggedIn() {
        return tokenNotExpired('id_token');
    }

    // log out
    logout() {
         this.authToken = null;
         this.user = null;
         localStorage.clear();
    }

}
