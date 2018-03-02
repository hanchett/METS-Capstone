import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
                            <Link to={"/"} style={style} className="navbar-brand">METS</Link>
                        </div>
                        <ul className="nav navbar-nav navbar-right">
                            <li>About</li>
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
