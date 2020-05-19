import React from 'react';
import { connect } from 'react-redux';
import {
    NavLink,
    withRouter,
} from 'react-router-dom';
import { signoutUser } from '../actions';

// const NavBar = (props) => {
//     return (
//         <nav>
//             <ul className="flex-container">
//                 <li><NavLink exact to="/">Home</NavLink></li>
//                 <li><NavLink to="/posts/new" exact>New Post</NavLink></li>
//                 <li><NavLink to="/signin" exact>Sign in</NavLink></li>
//                 <li><NavLink to="/signup" exact>Sign up</NavLink></li>

//             </ul>
//         </nav>
//     );
// };

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    componentDidMount() {
        console.log(this.props);
        console.log(this.state);
    }

    signOut() {
        console.log('signing out!');
        this.props.signoutUser(this.props.history);
    }

    render() {
        console.log(this.props.auth);
        if (!this.props.auth) {
            return (
                <nav>
                    <ul className="flex-container">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/posts/new" exact>New Post</NavLink></li>
                        <li><NavLink to="/signin" exact>Sign in</NavLink></li>
                        <li><NavLink to="/signup" exact>Sign up</NavLink></li>
                    </ul>
                </nav>
            );
        } else {
            return (
                <nav>
                    <ul className="flex-container">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/posts/new" exact>New Post</NavLink></li>
                        <li onClick={() => this.signOut()}> <NavLink to="/" exact>Sign out</NavLink></li>
                    </ul>
                </nav>
            );
        }
    }
}

const mapStateToProps = (reduxState) => ({
    auth: reduxState.auth.authenticated,
});


const mapDispatchToProps = (dispatch) => ({
    signoutUser: (history) => dispatch(signoutUser(history)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
