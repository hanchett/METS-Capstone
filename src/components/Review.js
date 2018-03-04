import React, { Component } from 'react';
import NavBar from './NavBar';
import FontAwesome from 'react-fontawesome';

class Review extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displaySideNav: 'none'
        }
    }
    toggleSide() {
        let dispState = '';
        console.log(this.state.displaySideNav === 'none')
        if (this.state.displaySideNav == 'none') {
            dispState = 'block';
        } else {
            dispState = 'none';
        }
        this.setState({
            displaySideNav: dispState
        });
    }

    render() {
        let hamburger = <FontAwesome
            name='fas fa-bars'
            size='2x'
        />

        let exit = <FontAwesome
            name='fas fa-times'

        />
        let sideDisp = this.state.displaySideNav;
        let hamDisp = sideDisp === 'block' ? 'none' : 'inline-block';
        return (
            <div>
                <NavBar />
                <div className="sidenav" style={{ display: sideDisp }}>
                    <button className='close' onClick={this.toggleSide.bind(this)}>{exit}</button>
                    <div className="filters">
                        <div className='subject'>Subject+</div>
                        <div className='barrier'>Learning Barrier+</div>
                        <div className='style'>Learning Style+</div>
                        <div className='more'>More Filters+</div>
                    </div>
                </div>
                <button className="hamburger" onClick={this.toggleSide.bind(this)} style={{ display: hamDisp }}>{hamburger}</button>

            </div>
        )
    }

}

export default Review