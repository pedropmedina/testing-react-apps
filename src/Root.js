import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

export default ({ children, initialState = {} }) => {
	// pass in initialState to configureStore for createStore
	const store = configureStore(initialState);

	return <Provider store={store}>{children}</Provider>;
};
