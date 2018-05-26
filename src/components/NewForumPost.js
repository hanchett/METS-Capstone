import React, {Component} from 'react';
import NavBar from './NavBar';


import './css/NewForumPost.css';

class NewForumPost extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='newForum'>
                <NavBar/>
                <div className="block"/>
                <div className="container">
                    <div className="forumPostCard">
                        <h2>New Forum Post</h2>
                    
                    </div>
                </div>
               
            </div>
        )
    }

}


export default NewForumPost;