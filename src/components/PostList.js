import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostListItem from './PostListItem';

const PostList = (props) => {
    console.log(props);
    let { posts } = props;
    // const posts = props.posts.result;
    if (!posts) {
        return <div> Loading ...</div>;
    } else {
        posts = props.posts.result;
    }

    const postItems = posts.map((post) => {
        return (
            <PostListItem key={post.id} id={post.id} title={post.title} tags={post.tags} coverUrl={post.coverUrl} history={props.history} />
        );
    });

    return (
        <ul>
            { postItems }
        </ul>
    );
};

// connects particular parts of redux state to this components props
const mapStateToProps = (state) => ({
    posts: state.posts.all,
});

// react-redux glue -- outputs Container that know state in props
// also with an optional HOC withRouter
// export default PostList;
export default withRouter(connect(mapStateToProps, null)(PostList));
