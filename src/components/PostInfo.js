import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import marked from 'marked';
import { deletePost, updatePost } from '../actions';

class PostInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
        };
    }

    onSubmit = () => {
        this.props.updatePost(this.state, this.props.history);

        // toggle isEditing boolean via shallow clone (in order to change react state)
        const updatedState = { ...this.state };
        updatedState.isEditing = false;
        this.setState(updatedState);
    }

    onEditToggle = () => {
        this.setState({
            isEditing: true,
            id: this.props.current.result.id,
            title: this.props.current.result.title,
            coverUrl: this.props.current.result.coverUrl,
            content: this.props.current.result.content,
        });
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
        if (!this.props.current) {
            return <div> Loading ...</div>;
        } else if (this.state.isEditing) {
            console.log(this.props.current.result);
            return (
                <form className="PostInfo" onSubmit={this.onSubmit}>
                    <h2>By user: {this.props.current.result.author.username} </h2>
                    <p>title: {this.state.title} </p>
                    <input type="text" name="title" defaultValue={this.state.title} onChange={this.onTitleChange} />
                    <p> coverUrl: {this.state.coverUrl} </p>
                    <input type="text" name="coverUrl" defaultValue={this.state.coverUrl} onChange={this.onCoverChange} />
                    <p>content</p>
                    <textarea defaultValue={this.state.content} onChange={this.onContentChange} />
                    <Button variant="primary" onClick={this.onSubmit}>
                        click me!
                    </Button>
                </form>
            );
        } else {
            console.log(this.props.current.result);
            console.log(this.props.current.result.id);

            return (
                <div className="PostInfo">
                    <h1>{this.props.current.result.title}</h1>
                    <h2>By: {this.props.current.result.author.username} </h2>
                    {/* <p>{this.props.current.result.coverUrl} </p> */}
                    <div className="noteBody" dangerouslySetInnerHTML={{ __html: marked(this.props.current.result.coverUrl || '') }} />
                    <p>{this.props.current.result.content}</p>
                    <button onClick={() => this.props.deletePost(this.props.current.result.id, this.props.history)} type="button">delete post</button>
                    <button onClick={() => this.onEditToggle()} type="button">edit post</button>
                </div>
            );
        }
    }
}

// connects particular parts of redux state to this components props
const mapStateToProps = (state) => ({
    current: state.posts.current,
});

const mapDispatchToProps = (dispatch) => ({
    deletePost: (id, history) => dispatch(deletePost(id, history)),
    updatePost: (post, history) => dispatch(updatePost(post, history)),
});

// react-redux glue -- outputs Container that know state in props
// also with an optional HOC withRouter
// export default PostList;
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostInfo));
