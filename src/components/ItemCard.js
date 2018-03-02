import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import '../../node_modules/font-awesome/css/font-awesome.css';


class ItemCard extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        let rating = <FontAwesome name='fas fa-star'/>
        return (
            <div className="col-sm-4">
                <div className="card">
                    <img src={require("../img/wireframe-image.png")} alt="card placeholder" />
                    <div className='itemInfo'>
                        <span className='itemTitle'>Lorem Ipsum</span>
                        <span className='itemRating'>{rating}{rating}{rating}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemCard;