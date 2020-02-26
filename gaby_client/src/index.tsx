import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './ui/routes';
import { State, AuthState, } from './models';
import { applyMiddleware, createStore } from 'redux';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducer';
import { Provider } from 'react-redux';
import { IsLoggedIn } from './utils/AuthService';
import JwtDecode from 'jwt-decode';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, ReduxThunk)(createStore);

function GetInitialState(): State {
	const token: string = localStorage.getItem('token') || '';
	let id: number = 0;
	let username: string = '';
	const loggedIn = IsLoggedIn(token);
	if (loggedIn) {
		const decoded:any = JwtDecode(token);
		id = parseInt(decoded.nameid);
		username = decoded.unique_name;
	}
	const AuthState: AuthState = {
		id,
		username,
		token,
		loggedIn,
	};

	return {
		AuthState,
	};
}

function RenderApp(store: any) {
	ReactDOM.render(
		<Provider store={store}>
            <App />
		</Provider>,
		document.getElementById('root')
	);
}

function StartUp() {
	const initialState: State = GetInitialState();
	const store = createStoreWithMiddleware(
		rootReducer,
		initialState,
	);
	RenderApp(store);
}

StartUp();
