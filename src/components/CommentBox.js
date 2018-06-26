import React from 'react';
import { connect } from 'react-redux';

import * as commentActions from '../actions/comments';

class CommentBox extends React.Component {
	state = { comment: '' };

	handleChange = event => {
		const comment = event.target.value;
		this.setState({ comment });
	};

	handleSubmit = event => {
		event.preventDefault();
		this.setState({ comment: '' });
		this.props.saveComment(this.state.comment);
	};

	render() {
		const { comment } = this.state;
		return (
			<form onSubmit={this.handleSubmit}>
				<h4>Add a comment</h4>
				<textarea value={comment} onChange={this.handleChange} />
				<div>
					<button>submit comment</button>
					<button
						className="fetch-comments"
						type="button"
						onClick={this.props.startFetchComments}
					>
						fetch comment
					</button>
				</div>
			</form>
		);
	}
}

export default connect(
	undefined,
	{ ...commentActions },
)(CommentBox);
