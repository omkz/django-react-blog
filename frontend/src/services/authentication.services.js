import axios from "axios";

import {BehaviorSubject} from 'rxjs';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')));

export const authenticationService = {
    login,
    logout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue() {
        return currentUserSubject.value
    }
};

function login(username, password) {
    const object = {
        username: username,
        password: password
    };

    axios.post('http://localhost:8000/rest-auth/login/', object)
        .then(res => {
            localStorage.setItem('user', JSON.stringify(res.data));
            currentUserSubject.next(res);
        }).catch(function (error) {
            console.log(error);
        });
}

function logout() {
    localStorage.removeItem('user');
    currentUserSubject.next(null);
}

