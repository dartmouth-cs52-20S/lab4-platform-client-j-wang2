import React from 'react';

const showPost = (id, history) => {
    history.push(`/posts/:${id}`);
};

const PostListItem = (props) => {
  return (
    // https://upmostly.com/tutorials/pass-a-parameter-through-onclick-in-react
    <li className="PostListItem">
        <h1>{props.title}</h1>
        <div>{props.tags}</div>
        <div>{props.coverUrl}</div>
        <button onClick={() => showPost(props.id, props.history)} type="button">View in full</button>
    </li>
    );
};

// react-redux glue -- outputs Container that know state in props
// also with an optional HOC withRouter
// export default PostList;
export default PostListItem;
