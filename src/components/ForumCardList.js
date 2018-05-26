import React, {Component} from 'react';
import ForumCard from './ForumCard';
import axios from 'axios';

class ForumCardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        }
        this.loadForumCards = this.loadForumCards.bind(this);
    }

    loadForumCards() {
        axios.get("http://localhost:3101/forum").then(res => {
            this.setState({
                cards: res.data
            });
            console.log(res.data);
        });
    }

    componentDidMount() {
        this.loadForumCards();
    }


    render() {
        return (
            <div>

            </div>
        )
    }

}


export default ForumCardList;