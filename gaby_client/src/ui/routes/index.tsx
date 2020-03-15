import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PublicRoute from './PublicRoute';
import LoginPage from '../pages/LoginPage';
import PrivateRoute from './PrivateRoute';
import HomePage from '../pages/HomePage';
import ImportPage from '../pages/ImportPage';
import DetailPage from '../pages/DetailPage';


const routes = (props: any) => {
	return (
		<Router>
            <div className="router-wrapper">
                <Switch>
                    <PublicRoute path='/' exact component={LoginPage} />
                    <PrivateRoute path='/home' exact component={HomePage} />
                    <PrivateRoute path='/import' exact component={ImportPage} />
                    <PrivateRoute path='/details/:id' exact component={DetailPage} />
                </Switch>
            </div>
		</Router>
	);
};

export default routes;
