import commentsReducer from '../../reducers/comments';

import { SAVE_COMMENT } from '../../actions/types';

test('should handle actions of type SAVE_COMMENT', () => {
	const action = {
		type: SAVE_COMMENT,
		payload: 'New Comment',
	};

	const newState = commentsReducer([], action);

	expect(newState).toEqual(['New Comment']);
});

test('should handle action with unknown type', () => {
	const newState = commentsReducer([], {});

	expect(newState).toEqual([]);
});
