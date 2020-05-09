import React from 'react';

// import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { newServerPost } from '../server-api';


class NewPost extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            isEditing: true,
            // tags: '',
            // content: '',
            // coverUrl: '',
        };
    }

    onSubmit = () => {
        console.log(this.state);
        newServerPost(this.state);
        const updatedState = { ...this.state };
        updatedState.isEditing = false;
        this.setState(updatedState);
        // this.state.isEditing = false;
    }

    onTitleChange = (event) => {
        this.setState({ title: event.target.value });
    }

    onContentChange = (event) => {
        this.setState({ content: event.target.value });
    }

    render() {
        // https://reactjs.org/docs/forms.html

        if (this.state.isEditing) {
            return (
                <form onSubmit={this.onSubmit}>
                    <p>title: {this.state.title} </p>
                    <input type="text" name="name" onChange={this.onTitleChange} />
                    <p>content</p>
                    <textarea onChange={this.onContentChange} />
                    <Button variant="primary" onClick={this.onSubmit}>
                        click me!
                    </Button>
                </form>
            );
        } else {
            return (
                <div>
                    <div> New post created!</div>
                    <p> title: {this.state.title} </p>
                    <p> content: {this.state.content} </p>
                </div>
            );
        }
    }
}

// connect to redux state
// const mapStateToProps = (reduxState) => ({
//     posts: reduxState.posts,
// });

// export default connect(mapStateToProps, { fetchPosts })(Posts);
// export default connect(NewPost);
// export default NewPost;
export default withRouter(NewPost);
