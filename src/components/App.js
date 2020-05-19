import React from 'react';
import { connect } from 'react-redux';

import '../style.scss';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
// import Nav from 'react-bootstrap/Nav';
import Posts from './Posts';
import NewPost from './NewPost';
import Post from './Post';
import SignIn from './SignIn';
import SignUp from './SignUp';
import NavBar from './NavBar';
import PrivateRoute from './PrivateRoute';

// const NavBar = (props) => {
//     return (
//         <nav>
//             <ul className="flex-container">
//                 <li><NavLink exact to="/">Home</NavLink></li>
//                 <li><NavLink to="/posts/new" exact>New Post</NavLink></li>
//             </ul>
//         </nav>
//     );
// };

const App = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Posts} />
                    {/* <Route path="/posts/new" component={NewPost} /> */}
                    <PrivateRoute path="/posts/new" component={NewPost} />
                    <Route path="/posts/:postID" component={Post} />
                    <Route path="/signin" component={SignIn} />
                    <Route path="/signup" component={SignUp} />
                    <Route render={() => (<div>post not found </div>)} />
                </Switch>
            </div>
        </Router>
    );
};

const mapStateToProps = (reduxState) => ({
    posts: reduxState.posts,
});

export default connect(mapStateToProps, null)(App);

// export default App;
