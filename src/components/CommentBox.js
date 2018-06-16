import React from 'react';

export default class CommentBox extends React.Component {
	state = { comment: '' };

	handleChange = event => {
		const comment = event.target.value;
		this.setState({ comment });
	};

	handleSubmit = event => {
		event.preventDefault();

		// TODO: call an action creator
		this.setState({ comment: '' });
	};

	render() {
		const { comment } = this.state;
		return (
			<form onSubmit={this.handleSubmit}>
				<h4>Add a comment</h4>
				<textarea value={comment} onChange={this.handleChange} />
				<div>
					<button>submit comment</button>
				</div>
			</form>
		);
	}
}
