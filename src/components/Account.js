import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import './css/Account.css';
import axios from 'axios';

class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            display_name: '',
            name_first: '',
            name_last: '',
            grade_level: ''

        }
        console.log(this.state)
    }

    testAccount(e) {
        console.log("Here test");
        this.state.email = "test@test.com";
        this.state.password = "test123";
        this.state.display_name = "admin";
        this.state.name_first = "Ichiro";
        this.state.name_last = "Suzuki";
        this.state.grade_level = "All";
        console.log(this.state);
    }

    submitTest(e) {
        
    }

    render() {
        console.log("Here render")
        let paddingTop = this.state.displaySideNav === true ? '130px'  : '0px';
        return(
            <div>
                <NavBar />
                <div className='main'>
                    <button className='testAccount' onClick={this.testAccount.bind(this)}>
                        Create Test Account
                    </button>
                </div>
            </div>
        )
    }
}

export default Account;