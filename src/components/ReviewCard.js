import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import './css/ReviewCard.css'


class ReviewCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: props.author.split(',')[3].trim().split("'")[1],
            rating: props.rating,
            summary: props.summary, 
            title: props.title
        }
        console.log(props.author.split(',')[3].trim().split("'")[1])
        
    }

    render() {
        let rating = [];
        for (let i = 0; i < this.state.rating; i++) {
            rating.push(<FontAwesome key={i} name='fas fa-star' />);
        }    
    
        return (
            <div>
                <div className="review">
                    <img className='profileImg' src={require("../img/user_placeholder.png")} alt="User Profile Image"/>
                    <h1 className='display_name'>{this.state.author}</h1>
                    <div className='rating'>{rating}</div>
                    <h2 className='reviewsTitle'>{this.state.title}</h2>
                    <p>{this.state.summary}</p>
                </div>
            </div>
        )
    }

}


export default ReviewCard;