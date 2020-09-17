import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createPosts } from '../actions/postAction';

class Postform extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        };
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit = (e) => {
        e.preventDefault();
       this.props.createPosts(this.state);
    }


    render() {
        return (
            <div>
                <h1>
                    Add Posts
                </h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title: </label> <br></br>
                        <input
                            onChange={this.onChange}
                            name="title"
                            type="text"
                            value={this.state.title}></input>
                    </div>
                    <div>
                        <label>Body: </label> <br></br>
                        <textarea
                            onChange={this.onChange}
                            name="body"
                            value={this.state.body}></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>

            </div>
        )
    }
}

export default connect(null, { createPosts })(Postform);
