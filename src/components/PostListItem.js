import React from 'react';
import marked from 'marked';

const showPost = (id, history) => {
    history.push(`/posts/:${id}`);
};

const PostListItem = (props) => {
  return (
    // https://upmostly.com/tutorials/pass-a-parameter-through-onclick-in-react
    <li className="PostListItem">
        <h1>{props.title}</h1>
        <div className="noteBody" dangerouslySetInnerHTML={{ __html: marked(props.coverUrl || '') }} />
        <button onClick={() => showPost(props.id, props.history)} type="button">View full post</button>
    </li>
    );
};

// react-redux glue -- outputs Container that know state in props
// also with an optional HOC withRouter
// export default PostList;
export default PostListItem;
