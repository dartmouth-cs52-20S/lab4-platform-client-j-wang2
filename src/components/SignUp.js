import React from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import { signupUser } from '../actions';


class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: true,
        };
    }

    onSignUp = () => {
        this.props.signupUser(this.state, this.props.history);

        // toggle isEditing boolean via shallow clone (in order to change react state)
        const updatedState = { ...this.state };
        updatedState.isEditing = false;
        this.setState(updatedState);
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value });
    }

    onUsernameChange = (event) => {
        this.setState({ username: event.target.value });
    }

    onPassChange = (event) => {
        this.setState({ password: event.target.value });
    }

    render() {
        if (this.state.isEditing) {
            return (
                <form className="PostInfo" onSubmit={this.onSubmit}>
                    <h2>Sign up</h2>
                    <p>email: </p>
                    <input type="text" name="email" onChange={this.onEmailChange} />
                    <p>username: </p>
                    <input type="text" name="username" onChange={this.onUsernameChange} />
                    <p>password: </p>
                    <input type="text" name="password" onChange={this.onPassChange} />
                    <Button variant="primary" onClick={this.onSignUp}>
                        Sign up
                    </Button>
                </form>
            );
        } else {
            return (
                <div className="PostInfo">
                    <div> Signed up!</div>
                    <p> email: {this.state.email} </p>
                    <p> username: {this.state.username} </p>
                    <p> password: {this.state.password} </p>
                </div>
            );
        }
    }
}

const mapDispatchToProps = (dispatch) => ({
    signupUser: ({ email, username, password }, history) => dispatch(signupUser({ email, username, password }, history)),
});

export default withRouter(connect(null, mapDispatchToProps)(SignUp));
