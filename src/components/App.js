import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { changeAuth } from '../actions/auth';

import CommentBox from './CommentBox';
import CommentList from './CommentList';

class App extends React.Component {
	renderButton = () => {
		if (this.props.auth) {
			return (
				<button onClick={() => this.props.changeAuth(false)}>Sign Out</button>
			);
		} else {
			return (
				<button onClick={() => this.props.changeAuth(true)}>Sign In</button>
			);
		}
	};

	renderHeader = () => {
		return (
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/post">Post a Comment</Link>
				</li>
				<li>{this.renderButton()}</li>
			</ul>
		);
	};

	render() {
		return (
			<div>
				{this.renderHeader()}
				<Route exact path="/" component={CommentList} />
				<Route path="/post" component={CommentBox} />
			</div>
		);
	}
}

const mapStateToProps = ({ auth }) => ({
	auth,
});

export default hot(module)(
	connect(
		mapStateToProps,
		{ changeAuth },
	)(App),
);
