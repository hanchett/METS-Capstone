import React, { Component } from 'react';
import NavBar from './NavBar';
import SideNav from './SideNav';
import axios from 'axios';
import FontAwesome from 'react-fontawesome';




import './css/Review.css';

class Review extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: [],
            id: props.match.params.id
        }
        this.loadInfo = this.loadInfo.bind(this);
    }

    loadInfo() {
        axios.get(`http://localhost:3101/review/${this.state.id}`).then(res => {
            console.log(res);
            this.setState({
                info: res.data
            });
        }).catch(function (err) {
            console.log("Error " + err);
        });
    }


    componentDidMount() {
        this.loadInfo();
    }


    render() {
        let rating = [];
        for(let i = 0; i < this.state.info.rating - 1; i++) {
            rating.push(<FontAwesome key={i} name='fas fa-star' />);
        }
        if(Math.round(this.state.info.rating) > this.state.info.rating ) {
            rating.push(<FontAwesome key={6} name="fas fa-star-half"/>);
        }
        return (
            <div>
                <NavBar />
                <SideNav display={false} />
                <div className="product">
                    <div className="productTitle">
                        <img src={this.state.info.image} alt="product image" />
                        <div className="info">
                            <h1>{this.state.info.title}</h1>
                            <h2>{this.state.info.developer}</h2>
                            <h2><a href={this.state.info.url} target="_blank">{this.state.info.url}</a></h2>
                            <div className="rating">
                                <h2>{rating}</h2>
                            </div>
                        </div>

                    </div>
                    <div className="summary">
                        <h2 className="summaryTitle">Product Summary</h2>
                        <div className="content">{this.state.info.summary}</div>
                    </div>
                    <div className="reviews">
                        <h2 className="reviewTitle">Reviews</h2>
                        {this.state.info.reviews}
                    </div>
                </div>
            </div>
        )
    }

}

export default Review