import { combineReducers } from "redux";
import AuthReducer from './AuthReducer';
import RecordReducer from "./RecordReducer";

const rootReducer = combineReducers({
	AuthState: AuthReducer,
	RecordState: RecordReducer,
});

export {initialAuthState} from './AuthReducer';
export default rootReducer;
