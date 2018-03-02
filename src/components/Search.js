import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import ItemCard from './ItemCard';

import './css/Search.css';

class Search extends Component {
    state = {
        subjects: []
    }        

    constructor(props) {
        super(props);
    }

    openSubject() {
         this.state.subjects = ['English', 'Reading', 'Writing', 'Math', 'Science'];
    }


    render() {
        return (
            <div>
                <NavBar />
                <div className="sidenav">
                    <div><a href="#subject">Subject+</a>
                    </div>
                    <a href="#learningBarrier">Learning Barrier+</a>
                    <a href="#learningStyle">Learning Style+</a>
                    <a href="#moreFilters">More Filters+</a>
                </div>
                <div className='body'>
                    <div className='row'>
                        <ItemCard/>
                        <ItemCard/>
                        <ItemCard/>
                        <ItemCard/>
                        <ItemCard/>
                        <ItemCard/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;

