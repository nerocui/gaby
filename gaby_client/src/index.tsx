import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './ui/routes';
import { State, AuthState, RecordState, } from './models';
import { applyMiddleware, createStore } from 'redux';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducer';
import { Provider } from 'react-redux';
import { IsLoggedIn } from './utils/AuthService';
import JwtDecode from 'jwt-decode';
import { initialRecordState } from './reducer/RecordReducer';
import Axios from 'axios';
import { GetRootURL } from './utils/DomainService';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { PersistGate } from 'redux-persist/integration/react';

const persistConfig = {
	key: 'root',
	storage,
};
  
const persistedReducer = persistReducer(persistConfig, rootReducer);

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, ReduxThunk)(createStore);

async function GetInitialState(): Promise<State> {
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
	let RecordState: RecordState = initialRecordState;
	let State: State = {
		AuthState,
		RecordState,
	};
	if (loggedIn) {
		try {
			const recordRes = await Axios.get(GetRootURL() + '/api/record/getall');
			const roleRes = await Axios.get(GetRootURL() + '/api/record/getallroles');
			State.RecordState.items = recordRes.data;
			State.RecordState.roles = roleRes.data;
			State.RecordState.selectedItem = null;
		} catch (err) {
			console.log('Failed get all records for initial state', err);
		}
	}
	return State;
}

function RenderApp(store: any, persistor: any) {
	ReactDOM.render(
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>,
		document.getElementById('root')
	);
}

async function StartUp() {
	const initialState: State = await GetInitialState();
	const store: any = createStoreWithMiddleware(
		persistedReducer,
		initialState,
	);
	let persistor = persistStore(store);
	RenderApp(store, persistor);
}

StartUp();
