import React from 'react';
import { shallow } from 'enzyme';

import { App } from '../../components/App';
import CommentBox from '../../components/CommentBox';
import CommentList from '../../components/CommentList';

let wrapper;

beforeEach(() => {
	wrapper = shallow(<App />);
});

test('shows a comment box', () => {
	expect(wrapper.find(CommentBox).length).toEqual(1);
});

test('shows a comment list', () => {
	expect(wrapper.find(CommentList).length).toEqual(1);
});
