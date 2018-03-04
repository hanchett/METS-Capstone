// Imported libraries and components 
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import NavBar from './NavBar';
import ItemCard from './ItemCard';

// Styles 
import './css/Search.css';

class Search extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            filters: props.filters,
            subjects: ['English', 'Reading', 'Writing', 'Math', 'Science'],
            displaySideNav: 'none'
        }
    }


    openSubject() {
        console.log("OPENING SUBJECT");
    }

    toggleSide() {
        console.log("working?")
        let dispState = '';
        if (this.state.displaySideNav === 'none') {
            dispState = 'block';
        } else {
            dispState = 'none';
        }
        this.setState({
            dispState: dispState
        });
    }

    render() {
        let hamburger = <FontAwesome
            name='fas fa-bars'
            size='2x'
        />

        let exit = <FontAwesome
            name='fas fa-times'
            
        />
        let sideDisp = this.state.dispState;
        let hamDisp = sideDisp === 'block' ? 'none' : 'inline-block';
        let margin = sideDisp === 'block' ? '160px' : '20px';
        return (
            <div>
                <NavBar />
                <button className='close' onClick={this.openSubject.bind(this)}>{exit}</button>

                <div className="sidenav" style={{ display: sideDisp }}>
                    <div className="filters">
                        <div className='subject'>Subject+</div>
                        <div className='barrier'>Learning Barrier+</div>
                        <div className='style'>Learning Style+</div>
                        <div className='more'>More Filters+</div>
                    </div>

                </div>
                <button className="hamburger" onClick={this.toggleSide.bind(this)} style={{ display: hamDisp }}>{hamburger}</button>
                <div className='results' style={{ marginLeft: margin }}>
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

