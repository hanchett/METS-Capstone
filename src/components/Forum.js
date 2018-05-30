import React, {Component} from 'react';
import NavBar from './NavBar';
import ForumCardList from './ForumCardList';


import './css/Forum.css';

class Forum extends Component {
    constructor(props) {
        super(props)
        this.state = {};
    }

    render() {
        return(
            <div>
                <NavBar/>
                <div className="content">
                    <h1>DiscoverEd Collaboration Forum</h1>
                </div>
                <ForumCardList/>
            </div>  
        );
    }
}


export default Forum;