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
        console.log(props);
        //this.loadCardsFromServer = this.loadCardsFromServer.bind(this);
    }

    // Loads in the card list form the server using the filters supplied to this method 
    // loadCardsFromServer() {
    //     axios.get(`/search?category=${this.state.filters}`).then(res => {
    //         this.setState({
    //             cards: res.data
    //         });
    //     }).catch(function(err) {
    //         console.log("Error ", err);
    //     });
    // }

    // componentDidMount() {
    //     this.loadCardsFromServer();
    //     setInterval(this.loadCardsFromServer, 2000);
    // }


    render() {
        return (
            <div>
                
            </div>
        );
    }

}


export default ItemCardList;