import Axios from 'axios';
import TYPE from './type';
import { GetRootURL } from '../utils/DomainService';

function DispatchLogin(token: string) {
	return {
		type: TYPE.LOGIN,
		payload: token,
	};
}

function DispatchLogout() {
	return {
		type: TYPE.LOGOUT,
		payload: '',
	};
}

export function Login(userName: string, password: string) {
	return (dispatch: any) => {
		Axios.post(GetRootURL() + '/api/auth/login', {userName, password})
			.then(res => {
				const { token } = res.data;
				localStorage.setItem('token', token);
				dispatch(DispatchLogin(token));
			})
			.catch(err => {
				console.log('Auth Error: ', err);
			});
	};
}

export function Logout() {
	return (dispatch: any) => {
		localStorage.setItem('token', '');
		dispatch(DispatchLogout());
	};
}
