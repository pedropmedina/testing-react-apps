import React from 'react';
import { connect } from 'react-redux';

class RequireAuth extends React.Component {
	componentDidMount() {
		this.shouldNavigateAway();
	}

	componentDidUpdate() {
		this.shouldNavigateAway();
	}

	shouldNavigateAway = () => {
		if (!this.props.auth) {
			this.props.history.push('/');
		}
	};

	render() {
		return this.props.children();
	}
}

const mapStateToProps = ({ auth }) => ({
	auth,
});

export default connect(mapStateToProps)(RequireAuth);
