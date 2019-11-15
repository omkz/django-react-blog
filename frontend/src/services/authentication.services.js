import axios from "axios";

import {BehaviorSubject} from 'rxjs';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')));

export const authenticationService = {
    login,
    logout,
    registration,
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

    return axios.post('http://localhost:8000/rest-auth/login/', object)
        .then(res => {
            localStorage.setItem('user', JSON.stringify(res.data));
            currentUserSubject.next(res);
            return res.data;
        })
}

function registration(username, password1, password2) {
    const object = {
        username: username,
        password1: password1,
        password2: password2
    };

    return axios.post('http://localhost:8000/rest-auth/registration/', object)
        .then(res => {
            return res.data;
        })
}

function logout() {
    localStorage.removeItem('user');
    currentUserSubject.next(null);
}

