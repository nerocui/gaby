import Axios from 'axios';
import JwtDecode from 'jwt-decode';
import { GetRootURL } from './DomainService';

export function Register(username: string, password: string) {
	Axios.post(GetRootURL() + '/api/auth/register', {username, password})
		.then(res => {
			console.log(res);
		})
		.catch(err => {
			console.log('Auth Error: ', err);
		});
}

export function IsLoggedIn(token=localStorage.getItem('token') || ''): boolean {
	try {
		const decoded = JwtDecode(token);
		console.log('Decoded: ', decoded);
		return !!decoded;
	} catch (e) {
		console.log('Failed to decode token: ', e);
		return false;
	}
}

export function GetUserObject(token=localStorage.getItem('token') || '') {
	try {
		const decoded = JwtDecode(token);
		console.log('Decoded: ', decoded);
		return decoded;
	} catch (e) {
		console.log('Failed to decode user token', e);
		return {};
	}
}

export function CreateNewOrganization(name: string) {
	const user: any = GetUserObject();
	if (user && user != {}) {
		Axios.post(GetRootURL() + '/api/organization/create', {name, userId: user.nameid})
			.then(res => {
				console.log(res);
			})
			.catch(err => {
				console.log(err);
			});
	}
}
