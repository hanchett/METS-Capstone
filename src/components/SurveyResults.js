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
            prodData = prodData.slice(15, 21);
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