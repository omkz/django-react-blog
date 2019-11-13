import React from 'react';
import {
    Route,
    Redirect
  } from "react-router-dom";
import {authService} from "../helpers/auth";


export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => {
        const currentUser = authService.currentUserValue;
        console.log(currentUser)
        if (!currentUser) {
            // not logged in so redirect to login page with the return url
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }

        // authorised so return component
        return <Component {...props} />
    }} />
)
export default PrivateRoute
