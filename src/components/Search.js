import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Search extends Component {

    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div>
                <div className='navigation'>
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <a className="navbar-brand" href="#">METS</a>
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
            </div>
        );
    }
}

export default Search;

