import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import '../../node_modules/font-awesome/css/font-awesome.css';
import './css/ItemCard.css'

class ItemCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            title: props.title,
            image: props.image,
            summary: props.summary,
            rating: props.rating
        }
    }

    render() {
        let rating = [];
        const greaterThan50 = this.state.summary.length > 50 ? "..." : ".";
        for(let i = 0; i < this.state.rating - 1; i++) {
            rating.push(<FontAwesome key={i} name='fas fa-star' />);
        }
        if(Math.round(this.state.rating) > this.state.rating ) {
            rating.push(<FontAwesome key={6} name="fas fa-star-half"/>);
        }

        return (
            <Link to={`/review/${this.state.id}`}>
                <div className="card">
                    <img src={`${this.state.image}`} alt="card placeholder" />
                    <div className='itemInfo'>
                        <span className='itemTitle' >{this.state.title}</span>
                        <span className='itemRating'>{rating}</span>
                        <p className='itemSummary'>{this.state.summary.substr(0, 55) + `${greaterThan50}`}</p>
                    </div>
                </div>
            </Link>

        )
    }
}

export default ItemCard;