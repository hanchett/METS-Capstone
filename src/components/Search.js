import React, { Component } from 'react';
import NavBar from './NavBar';
import ItemCard from './ItemCard';

import './css/Search.css';

class Search extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            filters: props.filters,
            subjects: ['English', 'Reading', 'Writing', 'Math', 'Science']
        }
    }


    openSubject() {
        console.log("OPENING SUBJECT");
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
                <div className='results'>
                    <div className='row'>
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;

