import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import CalendarScreen from "../component/calendar/CalendarScreen";
import {LoginScreen} from "../component/auth/LoginScreen";

const AppRouter = () => {
    return (
        <Router>
            <div>
                 <Switch>
                    <Route exact path={"/login"} component={LoginScreen}/>
                    <Route exact path={"/"} component={CalendarScreen}/>
                     <Redirect to="/"/>
                </Switch>
            </div>
        </Router>
    );
};

export default AppRouter;
