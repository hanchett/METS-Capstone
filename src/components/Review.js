import React, { Component } from 'react';
import NavBar from './NavBar';
import SideNav from './SideNav';

import './css/Review.css';

class Review extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <SideNav display={false}/>
            </div>
        )
    }

}

export default Review