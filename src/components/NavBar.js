import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './css/NavBar.css'

class NavBar extends Component {
    render() {
        let style = {
            color: 'white'
        }
        return (
            <div className='navigation'>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <Link to={"/"} style={style} className="navbar-brand">DiscoverED</Link>
                        </div>
                        <ul className="nav navbar-nav navbar-right">
                            <a href='https://shigenaka.github.io/DiscoverEd-Description/' target="_blank" className='aboutLink navLink'>About</a>
                            <Link to="/Account" className='navLink'>Account</Link>
                        </ul>
                    </div>
                </nav>
            </div>
        )}
}

export default NavBar;
