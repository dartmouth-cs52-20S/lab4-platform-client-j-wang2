import React from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';
import PostInfo from './PostInfo';

// show view for individual Post
class Post extends React.Component {
    componentDidMount() {
        const parsedID = this.props.match.params.postID.substr(1);
        this.props.fetchPost(parsedID);
    }

    render() {
        return (
            <PostInfo history={this.props.history} posts={this.props.posts} />
        );
    }
}

const mapStateToProps = (reduxState) => ({
    current: reduxState.current,
});

const mapDispatchToProps = (dispatch) => ({
    fetchPost: (id) => dispatch(fetchPost(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
