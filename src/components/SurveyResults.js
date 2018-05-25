import React, { Component } from 'react';
import NavBar from './NavBar';
import SideNav from './SideNav';
import SurveyResultCards from './SurveyResultCards';
import axios from 'axios';


class SurveyResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displaySideNav: false,
            filters: props.match.params.responses,
            prods: []
        };
        this.loadCards = this.loadCards.bind(this);
    }

    loadCards() {
        axios.get(`http://localhost:3101/search`).then(res => {
            let prodData = res.data;
            prodData = prodData.slice(15, 27);
            this.setState({
                prods: prodData
            });    
        });
    }

    componentDidMount() {
        this.loadCards();
    }




    addMargin(yn) {
        this.setState({
            displaySideNav: yn
        });
    }


    render() {
        console.log(this.state);
        let paddingTop = this.state.displaySideNav === true ? '130px' : '0px';
        return (
            <div>
                <NavBar />
                <SideNav callback={this.addMargin.bind(this)} />
                <SurveyResultCards filters={this.state.filters}/>



            </div>
        )
    }


}


export default SurveyResults;