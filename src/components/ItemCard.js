import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import '../../node_modules/font-awesome/css/font-awesome.css';
import './css/ItemCard.css'

class ItemCard extends Component {
    constructor(props) {
        console.log(props)
        super(props);
        this.state = {
            id: props.id
        }
    }

    render() {
        let rating = <FontAwesome name='fas fa-star' />
        return (
            <div className="col-sm-4">
                <Link to={'/review/' + this.state.id}>
                    <div className="card">
                        <div className="grey">
                        </div>
                        <img src={require("../img/wireframe-image.png")} alt="card placeholder" />
                        <div className='itemInfo'>
                            <span className='itemTitle' >Lorem Ipsum</span>
                            <span className='itemRating'>{rating}{rating}{rating}</span>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default ItemCard;