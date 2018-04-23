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
            image: props.image
        }
    }

    render() {
        let rating = <FontAwesome name='fas fa-star' />
        return (
            <Link to={`/review/ + ${this.state.id}`}>
                <div className="card">
                    <img src={`${this.state.image}`} alt="card placeholder" />
                    <div className='itemInfo'>
                        <span className='itemTitle' >{this.state.title}</span>
                        <span className='itemRating'>{rating}{rating}{rating}</span>
                    </div>
                </div>
            </Link>

        )
    }
}

export default ItemCard;