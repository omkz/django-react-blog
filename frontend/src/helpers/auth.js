import axios from "axios";
import {authHeader} from "./auth-header";

export function getCurrentUser() {
    if (!localStorage.getItem("user")) {
        return Promise.reject("No access token set.");
    }

    return axios.get("http://127.0.0.1:8000/rest-auth/user/",{
        headers: authHeader()
    }).then(response => {
        return response.data;
    });
}