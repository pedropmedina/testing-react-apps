import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

export default props => {
	return <Provider store={store}>{props.children}</Provider>;
};
