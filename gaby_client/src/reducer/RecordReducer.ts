import { Action, RecordState } from '../models';
import TYPE from '../action/type';

export const initialRecordState: RecordState = {
    items: [],
    selectedItem: null,
};

export default (state = initialRecordState, action: Action) => {
	switch (action.type) {
		case TYPE.SET_RECORDS:
            return Object.assign({}, state, { items: action.payload });
        case TYPE.SET_SELECTED_RECORD:
            return Object.assign({}, state, { selectedItem: action.payload });
		default:
			return state;
	}
};