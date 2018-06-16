import React from 'react';
import { hot } from 'react-hot-loader';

import CommentBox from './CommentBox';
import CommentList from './CommentList';

export const App = () => (
	<div>
		<CommentBox />
		<CommentList />
	</div>
);

export default hot(module)(App);
