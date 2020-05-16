import React from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
// import { newServerPost } from '../server-api';
import { createPost } from '../actions';


class NewPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: true,
        };
    }

    onSubmit = () => {
        this.props.createPost(this.state, this.props.history);

        // toggle isEditing boolean via shallow clone (in order to change react state)
        const updatedState = { ...this.state };
        updatedState.isEditing = false;
        this.setState(updatedState);
    }

    onTitleChange = (event) => {
        this.setState({ title: event.target.value });
    }

    onCoverChange = (event) => {
        this.setState({ coverUrl: event.target.value });
    }

    onContentChange = (event) => {
        this.setState({ content: event.target.value });
    }

    render() {
        // https://reactjs.org/docs/forms.html

        if (this.state.isEditing) {
            return (
                <form className="PostInfo" onSubmit={this.onSubmit}>
                    <h2>New Post</h2>
                    <p>Title: {this.state.title} </p>
                    <input type="text" name="title" onChange={this.onTitleChange} />
                    <p> coverUrl: {this.state.coverUrl} </p>
                    <input type="text" name="coverUrl" onChange={this.onCoverChange} />
                    <p>content</p>
                    <textarea onChange={this.onContentChange} />
                    <Button variant="primary" onClick={this.onSubmit}>
                        Create new post!
                    </Button>
                </form>
            );
        } else {
            return (
                <div className="PostInfo">
                    <div> New post created!</div>
                    <p> title: {this.state.title} </p>
                    <p> coverUrl: {this.state.coverUrl} </p>
                    <p> content: {this.state.content} </p>
                </div>
            );
        }
    }
}

const mapDispatchToProps = (dispatch) => ({
    createPost: (post, history) => dispatch(createPost(post, history)),
});

export default withRouter(connect(null, mapDispatchToProps)(NewPost));
