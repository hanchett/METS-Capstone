// Imported libraries and components 
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import NavBar from './NavBar';
import SideNav from './SideNav';
import ItemCard from './ItemCard';
import ItemCardList from './ItemCardList';
import axios from 'axios';

// Styles 
import './css/Search.css';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: props.match.params.filters.split(","),
            subjects: ['English', 'Reading', 'Writing', 'Math', 'Science'],
            displaySideNav: 'false'
        }
        this.mapFilters = this.mapFilters.bind(this);

    }

    mapFilters() {
        let filters = this.state.filters;
        const category = 0;
        const age = filters[2];
        const lang = filters[7];
        // axios.get(`/search/${category}/${age}/${lang}`).then(res => {
        //     this.setState({
        //         cards: res.data
        //     });
        // }).catch(function (err) {
        //     console.log("Error ", err);
        // });
        axios.post(`http://localhost:3101/comments/bob/asdasdsa/${'04-13-2018'}`).then(res => {
            console.log('WORKED');
            console.log(res);
        }).catch(function (err) {
            console.log("Error ", err);
        });
    }


    componentDidMount() {
        this.mapFilters();
        setInterval(this.mapFilters, 5000);
    }

    // loadCardsFromServer() {
    //     axios.get(`/search?category=${this.state.filters}`).then(res => {
    //         this.setState({
    //             cards: res.data
    //         });
    //     }).catch(function(err) {
    //         console.log("Error ", err);
    //     });
    // }

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
        let paddingTop = this.state.displaySideNav === true ? '130px' : '0px';
        return (
            <div>
                <NavBar />
                <SideNav callback={this.addMargin.bind(this)} />
                <div className='results' style={{ paddingTop: paddingTop }}>
                    <div className='row'>
                        <ItemCardList filters={this.state.filters} />>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;

