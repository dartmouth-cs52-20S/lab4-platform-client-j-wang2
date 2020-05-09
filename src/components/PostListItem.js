import React from 'react';
// import { connect } from 'react-redux';
// import { selectVideo } from '../actions';

const PostListItem = (props) => {
  return (
    <li className="PostListItem">
        <h1>{props.title}</h1>
        <div>{props.tags}</div>
        <div>{props.coverUrl}</div>
    </li>
    );
};

export default PostListItem;
// export default connect(null, { selectVideo })(VideoListItem);
