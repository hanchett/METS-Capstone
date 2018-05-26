import React, {Component} from 'react';
import ForumCard from './ForumCard';

class ForumCardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        }
        this.loadForumCards = this.loadForumCards.bind(this);
    }

    loadForumCards() {

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