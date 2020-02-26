import { Action, AuthState } from '../models';
import TYPE from '../action/type';
import { IsLoggedIn } from '../utils/AuthService';
import JwtDecode from 'jwt-decode';

export const initialAuthState: AuthState = {
	id: 0,
	username: '',
	token: '',
	loggedIn: false,
};

export default (state = initialAuthState, action: Action) => {
	switch (action.type) {
		case TYPE.LOGIN:
			let id: number = 0;
			let username: string = '';
			const loggedIn = IsLoggedIn(action.payload);
			if (loggedIn) {
				const decoded:any = JwtDecode(action.payload);
				id = parseInt(decoded.nameid);
				username = decoded.unique_name;
			}
			return Object.assign({}, state, { id, username, token: action.payload, loggedIn });
		case TYPE.LOGOUT:
			return initialAuthState;
		default:
			return state;
	}
};