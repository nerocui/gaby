import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PublicRoute from './PublicRoute';
import LoginPage from '../pages/LoginPage';
import PrivateRoute from './PrivateRoute';
import HomePage from '../pages/HomePage';



const routes = (props: any) => {
	return (
		<Router>
            <Switch>
                <PublicRoute path='/' exact component={LoginPage} />
                <PrivateRoute path='/home' exact component={HomePage} />
            </Switch>
		</Router>
	);
};

export default routes;