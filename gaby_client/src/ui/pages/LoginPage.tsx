import React, { useState } from 'react';
import { connect } from 'react-redux';
import { State } from '../../models';
import { Login } from '../../action';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import useStyles from '../../style/LoginStyle';

const LoginPage = (props: any) => {
	const [username, SetUsername] = useState('');
	const [password, SetPassword] = useState('');
	const OnChangeUsername = (e: any) => {
		SetUsername(e.target.value);
	};
	const OnChangePassword = (e: any) => {
		SetPassword(e.target.value);
	};
	const OnSubmit = (e: any) => {
		e.preventDefault();

		props.Login(username, password);
		SetUsername('');
		SetPassword('');
	};

	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.formBox}>
				<form onSubmit={OnSubmit}>
                    <div>
					    <TextField fullWidth label="User Name" value={username} onChange={OnChangeUsername} />
                    </div>
                    <div>
					    <TextField fullWidth label="Password" value={password} onChange={OnChangePassword} type="password"/>
                    </div>
                    <div className={classes.gap}>
                        <Button variant="contained" color="primary" type="submit">Login</Button>
                    </div>
				</form>
			</div>
		</div>
	);
};

function MapStateToProps(state: State) {
	return {
		loggedIn: state.AuthState.loggedIn,
		token: state.AuthState.token,
	};
}

const LoginPageWithRouter = withRouter(LoginPage);

export default connect(MapStateToProps, {Login})(LoginPageWithRouter);
