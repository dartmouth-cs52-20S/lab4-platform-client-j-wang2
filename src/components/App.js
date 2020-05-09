import React from 'react';

import '../style.scss';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch,
} from 'react-router-dom';
// import postList from './postList';
import Posts from './Posts';
import NewPost from './NewPost';


const Post = (props) => {
    return (
        <div>
            {/* <Counter /> */}
            ID: {props.match.params.id}
        </div>
    );
};

const NavBar = (props) => {
    return (
        <nav>
            <ul>
                <li><NavLink exact to="/">My Super Awesome Blog</NavLink></li>
                <li><NavLink to="/posts/new" exact>New Post</NavLink></li>
            </ul>
        </nav>
    );
};


const App = (props) => {
    return (
        <Router>
            <div>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Posts} />
                    <Route path="/posts/new" component={NewPost} />
                    <Route path="/posts/:postID" component={Post} />
                    <Route render={() => (<div>post not found </div>)} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
