import { saveComment } from '../../actions/comments';
import { SAVE_COMMENT } from '../../actions/types';

describe('saveComment', () => {
	test('should have the correct type', () => {
		const action = saveComment();
		expect(action.type).toEqual(SAVE_COMMENT);
	});

	test('should have the correct payload', () => {
		const action = saveComment('New Comment');
		expect(action.payload).toEqual('New Comment');
	});
});
