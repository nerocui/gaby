import { Action, RecordState } from '../models';
import TYPE from '../action/type';

export const initialRecordState: RecordState = {
    items: [],
    selectedItem: null,
    selectedItemLoading: true,
    roles: [],
};

export default (state = initialRecordState, action: Action) => {
	switch (action.type) {
		case TYPE.SET_RECORDS:
            return Object.assign({}, state, { items: action.payload });
        case TYPE.SET_SELECTED_RECORD:
            return Object.assign({}, state, { selectedItem: action.payload });
        case TYPE.SET_ROLES:
            return Object.assign({}, state, { roles: action.payload });
        case TYPE.SET_SELECTED_RECORD_LOADING:
            return Object.assign({}, state, { selectedItemLoading: action.payload });
        default:
			return state;
	}
};
