import React, { Component } from 'react';
import NavBar from './NavBar';
import axios from 'axios';

class ForumPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id
        };
    }

    getComments () {
        axios.get(`http://localhost:3101/forum/${this.state.id}`).then(res => {
            this.setState({
                post: res
            }); 
        }).catch(err => {
            console.log(err);
        });
    }

    componentDidMount() {
        this.getComments();
    }

    render() {
        console.log(this.state);
        return (
            <div>
                test

            </div>
        )

    }
}

export default ForumPost;