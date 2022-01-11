import React from 'react';
import { Switch } from 'react-router-dom';

// Route Setting
// import HomePage from "../HomePage";

import HomePage8 from "../HomePage8";


// Normal Route
// import PrivateRoute from "../_PrivateRoute";
import PublicRoute from "../_PublicRoute";

export default function Routes() {
    return (
        <Switch>
            <PublicRoute
                exact
                path="/"
                component={HomePage8}
            />

            

            {/* <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignupPage} /> */}
            {/* <Route exact component={HomePage} /> */}
        </Switch>
    );
}
