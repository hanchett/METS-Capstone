// Imported libraries and components 
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import NavBar from './NavBar';
import SideNav from './SideNav';
import ItemCard from './ItemCard';
import ItemCardList from './ItemCardList';

// Styles 
import './css/Search.css';

class Search extends Component {
    constructor(props) {
        super(props);
        
        console.log("Search Props");
        console.log(props);
        console.log(props.match.params.filters)
        this.state = {
            filters: props.filters,
            subjects: ['English', 'Reading', 'Writing', 'Math', 'Science'],
            displaySideNav: 'false'
        }
    }

    handleFilterChange() {

    }

    openSubject() {
        console.log("OPENING SUBJECT");
    }
    
    addMargin(yn) {
        this.setState({
            displaySideNav: yn
        });
    }
    

    render() {
        let rands = Math.random();
        console.log(rands)
        let paddingTop = this.state.displaySideNav === true ? '130px'  : '0px';
        return (
            <div>
                <NavBar />
                <SideNav callback={this.addMargin.bind(this)}/>
                <div className='results' style={{ paddingTop: paddingTop}}>
                    <div className='row'>
                        <ItemCardList filters={this.state.filters}/>>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;

