import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';



class SideNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displaySideNav: 'none', 
            callback: props.callback
        }
    }

    toggleSide() {
        let dispState = '';
        if (this.state.displaySideNav == 'none') {
            dispState = 'block';
            this.state.callback(true);
        } else {
            dispState = 'none';
            this.state.callback(false);
            
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
                <div className="sidenav" style={{ display: sideDisp}}>
                    <button className='close' onClick={this.toggleSide.bind(this)}>{exit}</button>
                    <div className="filters">
                        <div className='subject'>Subject+</div>
                        <div className='disability'>Learning Disabilities+</div>
                        <div className='challenge'>Student Challenges+</div>
                        <div className='more'>More Filters+</div>
                    </div>
                </div>
                <button className="hamburger" onClick={this.toggleSide.bind(this)} style={{ display: hamDisp }}>{hamburger}</button>
            </div>
        )
    }


}

export default SideNav