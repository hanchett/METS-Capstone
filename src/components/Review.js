import React, { Component } from 'react';
import NavBar from './NavBar';
import SideNav from './SideNav';
import axios from 'axios';
import FontAwesome from 'react-fontawesome';
import ReviewCard from './ReviewCard';
import { Link } from 'react-router-dom';


import './css/Review.css';

class Review extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: [],
            id: props.match.params.id, 
            reviews: []
        }
        this.loadInfo = this.loadInfo.bind(this);
    }

    loadInfo() {
        axios.get(`http://localhost:3101/review/${this.state.id}`).then(res => {
            this.setState({
                info: res.data
            });
            let reviews = res.data.reviews;
            reviews.forEach(review_id => {
                axios.get(`http://localhost:3101/reviews/${review_id}`).then(res => {
                    let review_list = this.state.reviews;
                    review_list.push(res.data);
                    this.setState({
                        reviews: review_list
                    });
                });
            });
        }).catch(function (err) {
            console.log(this);
            console.log("Error " + err);
        });
    }



    componentDidMount() {
        this.loadInfo();
    }


    render() {
        let rating = [];
        console.log(this.state);
        for (let i = 0; i < this.state.info.rating; i++) {
            rating.push(<FontAwesome key={i} name='fas fa-star' />);
        }
        if (Math.round(this.state.info.rating) > this.state.info.rating) {
            rating.push(<FontAwesome key={6} name="fas fa-star-half" />);
        }
        const reviews = this.state.reviews.length > 0 ?
            this.state.reviews.map(review => {
                return <ReviewCard key={review._id} id={review._id} author={review.author} summary={review.text} rating={review.rating} date={review.date} title={review.title} />;
            }) : <div className='noReviews'>No Reviews</div>

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
                        <h2 className="reviewTitle">Product Reviews</h2>
                        <Link to={`/review/${this.state.info._id}/new`}><button className='newReview'>Review This Product</button></Link>

                        <div className='review'>
                        {reviews}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Review