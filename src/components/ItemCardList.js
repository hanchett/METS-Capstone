import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ItemCard from './ItemCard';


class ItemCardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: props.filters,
            cards: []
        };
        this.loadProducts = this.loadProducts.bind(this);
    }

    loadProducts() {
        axios.get(`http://localhost:3101/search`).then(res => {
            console.log(res);
            this.setState({
                cards: res.data
            });
        }).catch(function (err) {
            console.log("Error " + err);
        });
    }

    // Loads in the card list form the server using the filters supplied to this method 
    // loadCardsFromServer() {
    //     axios.get(`/search?category=${this.state.filters}`).then(res => {
    //         this.setState({
    //             cards: res.data
    //         });
    //     }).catch(function(err) {
    // console.log("Error ", err);
    //     });
    // }

    componentDidMount() {
        this.loadProducts();
    }


    render() {
        console.log(this.state.cards)
        return (
            <div>
                {this.state.cards.map(card => {
                    return <ItemCard key={card._id} id={card._id} title={card.title} image={card.image}/>;
                })}
            </div>
        );
    }

}


export default ItemCardList;