import React from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import { signinUser } from '../actions';


class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: true,
        };
    }

    onSignIn = () => {
        this.props.signinUser(this.state, this.props.history);

        // toggle isEditing boolean via shallow clone (in order to change react state)
        const updatedState = { ...this.state };
        updatedState.isEditing = false;
        this.setState(updatedState);
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value });
    }

    onPassChange = (event) => {
        this.setState({ password: event.target.value });
    }

    render() {
        if (this.state.isEditing) {
            return (
                <form className="PostInfo" onSubmit={this.onSubmit}>
                    <h2>Sign in</h2>
                    <p>email: </p>
                    <input type="text" name="email" onChange={this.onEmailChange} />
                    <p>password: </p>
                    <input type="text" name="password" onChange={this.onPassChange} />
                    <Button variant="primary" onClick={this.onSignIn}>
                        Sign in
                    </Button>
                </form>
            );
        } else {
            return (
                <div className="PostInfo">
                    <div> Signed in</div>
                    <p> email: {this.state.email} </p>
                    <p> password: {this.state.password} </p>
                </div>
            );
        }
    }
}

const mapDispatchToProps = (dispatch) => ({
    signinUser: ({ email, password }, history) => dispatch(signinUser({ email, password }, history)),
});

export default withRouter(connect(null, mapDispatchToProps)(SignIn));
