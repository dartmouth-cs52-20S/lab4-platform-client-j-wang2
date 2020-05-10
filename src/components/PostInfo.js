import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { deletePost, updatePost } from '../actions';

class PostInfo extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            isEditing: false,
        };
    }

    componentDidMount() {
        console.log(this.props);
    }

    onSubmit = () => {
        console.log(this.props.current.id);
        console.log(this.state);
        this.props.updatePost(this.state);

        // toggle isEditing boolean via shallow clone (in order to change react state)
        const updatedState = { ...this.state };
        updatedState.isEditing = false;
        this.setState(updatedState);
    }

    onEditToggle = () => {
        this.setState({
            isEditing: true,
            id: this.props.current.id,
            title: this.props.current.title,
            coverUrl: this.props.current.coverUrl,
            content: this.props.current.content,
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
        }
        if (this.state.isEditing) {
            return (
                <form className="PostInfo" onSubmit={this.onSubmit}>
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
            return (
                <div className="PostInfo">
                    <h1>{this.props.current.title}</h1>
                    <p>{this.props.current.coverUrl} </p>
                    <p>{this.props.current.content}</p>
                    <button onClick={() => this.props.deletePost(this.props.current.id, this.props.history)} type="button">delete post</button>
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
    updatePost: (post) => dispatch(updatePost(post)),
});

// react-redux glue -- outputs Container that know state in props
// also with an optional HOC withRouter
// export default PostList;
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostInfo));
