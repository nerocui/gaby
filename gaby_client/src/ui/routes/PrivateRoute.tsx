import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { State } from '../../models';

const PrivateRoute = (props: any) => {
	const { component, ...rest } = props;
	const render = () => {
		const COMPONENT = component;
		return (
			props.loggedIn ? <COMPONENT /> : <Redirect to="/"/>
		);
	}
	return (
		<Route {...rest} render={render} />
	);
};

function MapStateToProps(state: State) {
	return {
		loggedIn: state.AuthState.loggedIn,
	};
}

export default connect(MapStateToProps)(PrivateRoute);
