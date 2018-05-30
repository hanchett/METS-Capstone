import React, { Component } from 'react';
import NavBar from './NavBar';
import SideNav from './SideNav';
import SurveyResultCards from './SurveyResultCards';
import axios from 'axios';

//css
import './css/SurveyResults.css';


class SurveyResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displaySideNav: false,
            filters: props.match.params.responses,
            prods: []
        };
        this.loadCards = this.loadCards.bind(this);
        document.body.style.overflow = 'auto';
    }

    loadCards() {
        axios.get(`http://localhost:3101/search`).then(res => {
            let prodData = res.data;
            prodData = prodData.slice(22, 28); //for display, people can see same things and we can aggregate reviews for capstone night
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
            <div className = "surveyResults">
                <NavBar />
                <SideNav callback={this.addMargin.bind(this)} />
                <div className="results" style={{ paddingTop: paddingTop }}>
                    <div className='row'>
                        {this.state.prods.map(card => {
                            return <SurveyResultCards key={card._id} id={card._id} title={card.title} image={card.image} summary={card.summary} rating={card.rating} tags={card.tags}/>;
                        })}
                    </div>
                </div>
              


            </div>
        )
    }


}


export default SurveyResults;