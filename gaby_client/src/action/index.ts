import Axios from 'axios';
import TYPE from './type';
import { Record, Role } from '../models';
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

function DispatchSetRecords(records: Array<Record>) {
	return {
		type: TYPE.SET_RECORDS,
		payload: records,
	};
}

function DispatchSelectedRecordLoading(loading: boolean) {
	return {
		type: TYPE.SET_SELECTED_RECORD_LOADING,
		payload: loading,
	};
}

function DispatchSetSelectedRecord(record: Record) {
	return {
		type: TYPE.SET_SELECTED_RECORD,
		payload: record,
	};
}

function DispatchSetRoles(roles: Array<Role>) {
	return {
		type: TYPE.SET_ROLES,
		payload: roles,
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

export function GetRecords() {
	return (dispatch: any) => {
		Axios.get(GetRootURL() + '/api/record/getall')
			.then(res => {
				dispatch(DispatchSetRecords(res.data));
			})
			.catch(err => {
				console.log('Failed to get records', err);
			});
	}
}

export function SetRecords(records: Array<Record>) {
	return (dispatch: any) => dispatch(DispatchSetRecords(records));
};

export function GetRoles() {
	return (dispatch: any) => {
		Axios.get(GetRootURL() + '/api/record/getallroles')
			.then(res => {
				dispatch(DispatchSetRoles(res.data));
			})
			.catch(err => {
				console.log('Failed to get roles');
			});
	};
}

export function GetAllDate() {
	return async (dispatch: any) => {
		try {
			const recordRes = await Axios.get(GetRootURL() + '/api/record/getall');
			const roleRes = await Axios.get(GetRootURL() + '/api/record/getallroles');
			dispatch(DispatchSetRecords(recordRes.data));
			dispatch(DispatchSetRoles(roleRes.data));
		} catch (err) {
			console.log('Failed to get all data', err);
		}
	};
}

export function PostRecords(records: Array<Record>) {
	return async (dispatch: any) => {
		try {
			const res = await Axios.post(GetRootURL() + '/api/record/addall', records);
			dispatch(DispatchSetRecords(res.data));
		} catch (err) {
			console.log('Failed to post records');
		}
	};
}

export function GetRecord(id: number) {
	return async (dispatch: any) => {
		try {
			dispatch(DispatchSelectedRecordLoading(true));
			const res = await Axios.get(GetRootURL() + `/api/Record?id=${id}`);
			dispatch(DispatchSetSelectedRecord(res.data));
			dispatch(DispatchSelectedRecordLoading(false));
		} catch (err) {
			console.log('Failed to get record', err);
		}
	}
}

export function Logout() {
	return (dispatch: any) => {
		localStorage.setItem('token', '');
		dispatch(DispatchLogout());
	};
}
