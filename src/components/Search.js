// Imported libraries and components 
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import NavBar from './NavBar';
import SideNav from './SideNav';
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
            displaySideNav: 'false'
        }
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
                <div className='results' style={{ marginLeft: '160px', paddingTop: paddingTop}}>
                    <div className='row'>
                        <ItemCard id={rands}/>
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

