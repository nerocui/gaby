import { combineReducers } from "redux";
import AuthReducer from './AuthReducer';

const rootReducer = combineReducers({
	AuthState: AuthReducer,
});

export {initialAuthState} from './AuthReducer';
export default rootReducer;
