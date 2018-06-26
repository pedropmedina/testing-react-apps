import { CHANGE_AUTH } from './types';

export const changeAuth = isLoggedIn => ({
	type: CHANGE_AUTH,
	payload: isLoggedIn,
});
