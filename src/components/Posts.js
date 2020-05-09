import React from 'react';
// import ReactDOM from 'react-dom';
// import { Map as iMap } from 'immutable';
// import './style.scss';

import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import { fetchPosts } from '../actions';
import { getServerPosts } from '../server-api';
import PostList from './PostList';


class Posts extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    componentDidMount() {
        console.log('here in comp did mount');
        getServerPosts().then((posts) => {
            console.log(posts);
            this.props.fetchPosts(posts);
        });
    }


    render() {
        console.log('rendering posts');
        console.log(this.props);
        return (
            <div>
                <h1> rendering posts ! </h1>
                <PostList className="flex-container" />
                {/* { this.renderPosts(this.props.posts) } */}
            </div>
        );
    }
}

// connect to redux state
const mapStateToProps = (reduxState) => ({
    posts: reduxState.posts,
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
// export default connect(Posts);
// export default withRouter(connect(mapStateToProps, null)(Posts));
