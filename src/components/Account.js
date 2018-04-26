import React, { Component } from 'react';
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
        this.setState({
            email: "test@test.com", 
            password: "test123",
            display_name: "admin",
            name_first: "Ichiro",
            name_last: "Suzuki",
            grade_level: "All"
        });
        console.log(this.state);

        const { email, password, display_name, name_first, name_last, grade_level } = this.state;

        axios.post(`http://localhost:3101/account/${email}/${password}/${display_name}/${name_first}/${name_last}/${grade_level}`)
            .then((result) => {
                console.log("WORKED???");
            })
        .catch(function (error) {
            console.log("Shit");
            console.log(error)
        });
    }

    render() {
        console.log("Here render")
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