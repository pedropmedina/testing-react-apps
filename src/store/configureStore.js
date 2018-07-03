import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// import async from '../middlewares/async';
import stateValidator from '../middlewares/stateValidator';

import reducers from '../reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default initialState => {
	const store = createStore(
		reducers,
		initialState,
		composeEnhancers(applyMiddleware(thunk, stateValidator)),
	);
	return store;
};
