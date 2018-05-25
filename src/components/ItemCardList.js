import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ItemCard from './ItemCard';


class ItemCardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: props.filters,
            cards: [],
            numPages : 0,
            //currItems : [0,9],
            pageLis : [],
            currCards : []
        };
        this.loadProducts = this.loadProducts.bind(this);
    }

    loadProducts() {
        axios.get(`http://localhost:3101/search`).then(res => {
            var prodData = res.data;
            this.setState({
                cards: res.data,
                numPages : Math.ceil(res.data.length/9),
                currCards : res.data.slice(0,9)
            });
            var nums = Array.apply(null, {length: this.state.numPages}).map(Number.call, Number)
            /*var lis = [];
            for (var i=0; i<this.state.numPages; i++) {
                lis.push(<li id = {i} className = "pageNum" key={i} onClick={() => this.setPage(this.props.id)}><a href = "#">{i + 1}</a></li>);
            }*/
            this.setState({
                pageLis : nums
            });
        }).catch(function (err) {
            console.log("Error " + err);
        });
    }

    setPage(page) {
        var beginNum = 9 * page;
        var endNum = (9 * page) + 9;
        var allCards = this.state.cards;
        //var newArray = [beginNum, endNum];
        //console.log(newArray);
        if(endNum > allCards.length) {
            this.setState({
                currCards : allCards.slice(beginNum)
            });
            //console.log(allCards.slice(beginNum))
        } else{
            this.setState({
                currCards : allCards.slice(beginNum,endNum)
            });
            //console.log(allCards.slice(beginNum,endNum))
        }
        //console.log(this.state.cards);
        //console.log(this.state.currCards);
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
        return (
            <div>
                {this.state.currCards.map(card => {
                    return <ItemCard key={card._id} id={card._id} title={card.title} image={card.image} summary={card.summary} rating={card.rating} />;
                })}
                <div class="pageTracker">
                    <ul class="pagination">
                        {this.state.pageLis.map(page =>
                            <li key={page+1} onClick={() => this.setPage(page)}>
                                <a href={"#"}>
                                    {page+1}
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }

}


export default ItemCardList;