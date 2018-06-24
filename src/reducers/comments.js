import { SAVE_COMMENT } from '../actions/types';

const commentsDefaultReducer = [];
export default (state = commentsDefaultReducer, action) => {
	switch (action.type) {
		case SAVE_COMMENT:
			return [...state, action.payload];
		default:
			return state;
	}
};
