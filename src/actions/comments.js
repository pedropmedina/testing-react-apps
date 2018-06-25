import { SAVE_COMMENT, FETCH_COMMENTS } from './types';

export const saveComment = comment => ({
	type: SAVE_COMMENT,
	payload: comment,
});

const fetchComments = comments => ({
	type: FETCH_COMMENTS,
	payload: comments,
});

export const startFetchComments = () => {
	return dispatch => {
		fetch('http://jsonplaceholder.typicode.com/comments')
			.then(res => res.json())
			.then(comments => {
				dispatch(fetchComments(comments));
			});
	};
};
