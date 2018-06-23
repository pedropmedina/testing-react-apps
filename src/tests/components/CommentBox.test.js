import React from 'react';
import { mount } from 'enzyme';

import CommentBox from '../../components/CommentBox';

let wrapper;

beforeEach(() => {
	wrapper = mount(<CommentBox />);
});

afterEach(() => {
	wrapper.unmount();
});

test('should contain a textarea and button', () => {
	expect(wrapper.find('textarea').length).toEqual(1);
	expect(wrapper.find('button').length).toEqual(1);
});

describe('the textarea', () => {
	beforeEach(() => {
		wrapper.find('textarea').simulate('change', {
			target: { value: 'new comment' },
		});
		wrapper.update();
	});

	test('should track changes in text area', () => {
		expect(wrapper.find('textarea').prop('value')).toEqual('new comment');
	});

	test('should empty textarea value on form submission', () => {
		wrapper.find('form').simulate('submit');
		wrapper.update();
		expect(wrapper.find('textarea').prop('value')).toEqual('');
	});
});
