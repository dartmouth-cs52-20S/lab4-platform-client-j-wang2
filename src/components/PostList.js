import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostListItem from './PostListItem';

const PostList = ({ posts }) => {
    if (!posts) {
        return <div> Loading ...</div>;
    }
    console.log(posts);

    // let returnJSX = '';
    const postItems = posts.map((post) => {
        return (
            <PostListItem key={post.id} id={post.id} tags={post.tags} coverUrl={post.coverUrl} title={post.title} />
        );
    });

    return (
        <ul>
            { postItems }
            <li>here i am</li>
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
