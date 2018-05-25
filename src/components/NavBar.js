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
                            <a href='https://shigenaka.github.io/DiscoverEd-Description/' target="_blank"><li>About</li></a>
                            <li>Services</li>
                            <li>Login</li>
                            <li><i className="fa fa-user"></i></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )}
}

export default NavBar;
