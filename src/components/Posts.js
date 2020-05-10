import React from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import { fetchPosts } from '../actions';
import PostList from './PostList';


class Posts extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
        console.log(this.props);
    }

    render() {
        console.log('rendering posts');
        return (
            <div>
                <h1> rendering posts ! </h1>
                <PostList history={this.props.history} posts={this.props.posts} className="flex-container" />
                {/* { this.renderPosts(this.props.posts) } */}
            </div>
        );
    }
}

// connect to redux state
const mapStateToProps = (reduxState) => ({
    posts: reduxState.posts,
});


const mapDispatchToProps = (dispatch) => ({
    fetchPosts: () => dispatch(fetchPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
// export default connect(Posts);
// export default withRouter(connect(mapStateToProps, null)(Posts));
