import React, { Component } from 'react';
import NavBar from './NavBar';
import axios from 'axios';

//import styles
import './css/Account.css';

class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            token: '',
            signUpError: '',
            signInError: '',
            signUpEmail: '',
            signInEmail: '',
            signUpPassword: '',
            signInPassword: '',
            signUpDisplayName: '',
            signInDisplayName: '',
            signUpNameFirst: '',
            signInNameFirst: '',
            signUpNameLast: '',
            signInNameLast: '',
            signUpTeachTitle: '',

        }
        
        this.handleChange = this.handleChange.bind(this);

        this.onSignIn = this.onSignIn.bind(this);
        this.onSignUp = this.onSignUp.bind(this);
        this.logout = this.logout.bind(this);
        //this.logout = this.logout.bind(this);
        //console.log(this.state)
    }

    handleChange(e) {
        const inputName = e.target.id;
        let value = []; 
        if(e.target.selectedOptions) {
            for(let i = 0; i < e.target.selectedOptions.length; i++) {
                value.push(e.target.selectedOptions[i].value);
            }
        } else {
            value = e.target.value;
        }
        this.setState({
            [inputName]: value
        });
    }

    onSignUp() {
        //Grab state
        const{
            signUpEmail,
            signUpPassword,
            signUpDisplayName,
            signUpNameFirst,
            signUpNameLast,
            signUpTeachTitle,
        } = this.state

        this.setState({
            isLoading: true,
        });

        //post request to backend
        axios.post(`http://localhost:3101/account/signup/${signUpEmail}/${signUpPassword}/${signUpDisplayName}/${signUpNameFirst}/${signUpNameLast}/${signUpTeachTitle}`)
            .then(response => {
                console.log('here', response);
                alert("test");
                if (response.data) {
                    this.setState({
                        signInError: response.data.message,
                        isLoading: false,
                        signInEmail: '',
                        signInPassword: '',
                        token: response.data._id
                    });
                } else {
                    this.setState({
                        signUpError: response.data.message,
                        isLoading: false,
                    });
                }
            });
    }

    onSignIn() {
        const {
            signInEmail,
            signInPassword,
        } = this.state;

        this.setState({
            isLoading: true
        });

        //get data to front end
        axios.get(`http://localhost:3101/account/signin/${signInEmail}/${signInPassword}`)
            .then(res => {
                console.log('json', res.data[0]);
                if (res.data[0]) {
                    this.setState({
                        signInError: res.data[0].message,
                        token: res.data[0]._id,
                        isLoading: false,
                        signInEmail: '',
                        signInPassword: '',
                        signInDisplayName: res.data[0].display_name,
                        signInNameFirst: res.data[0].name_first,
                        signInNameLast: res.data[0].name_last,
                        signInTeachTitle: res.data[0].teach_title,
                    });
                    console.log(this.state.token);
                } else {
                    this.setState({
                        signInError: res.message,
                        isLoading: false,
                    });
                }
            });
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('http://localhost:3101/account/logout/').then(res => {
          console.log(res.data)
          if (res.status === 200) {
            this.setState({
              token: null,
              signInDisplayName: '',
              signInNameFirst: '',
              signInNameLast: '',
              signInTeachTitle: '',
            })
          }
        }).catch(error => {
            console.log('Logout error')
        })
      }

    render() {
        //console.log("Here render")
        const {
          isLoading,
          token,
          signInError,
          signInEmail,
          signInPassword,
          signUpEmail,
          signUpPassword,
          signUpDisplayName,
          signUpNameFirst,
          signUpNameLast,
          signUpTeachTitle,
          signUpError,
        } = this.state;
    
        if (!token) {
          return (
            <div>
              <NavBar />
              <div className = "signin">
                {
                  (signInError) ? (
                    <p>{signInError}</p>
                  ) : (null)
                }
                <p>Sign In</p>
                <input
                  type="email"
                  placeholder="Email"
                  id='signInEmail'
                  value={signInEmail}
                  onChange={this.handleChange}
                />
                <br />
                <input
                  type="password"
                  placeholder="Password"
                  id='signInPassword'
                  value={signInPassword}
                  onChange={this.handleChange}
                />
                <br />
                <button className='acct' onClick={this.onSignIn}>Sign In</button>
              </div>
              <div className = "signup">
                {
                  (signUpError) ? (
                    <p>{signUpError}</p>
                  ) : (null)
                }
                <p>Sign Up</p>
                <input
                  type="email"
                  placeholder="Email"
                  id='signUpEmail'
                  value={signUpEmail}
                  onChange={this.handleChange}
                /><br />
                <input
                  type="password"
                  placeholder="Password"
                  id='signUpPassword'
                  value={signUpPassword}
                  onChange={this.handleChange}
                /><br />
                <input
                  type="display_name"
                  placeholder="Account Display Name"
                  id='signUpDisplayName'
                  value={signUpDisplayName}
                  onChange={this.handleChange}
                /><br />
                <input
                  type="name_first"
                  placeholder="First Name"
                  id='signUpNameFirst'
                  value={signUpNameFirst}
                  onChange={this.handleChange}
                /><br />
                <input
                  type="name_last"
                  placeholder="Last Name"
                  id='signUpNameLast'
                  value={signUpNameLast}
                  onChange={this.handleChange}
                /><br />
                <input
                  type="teach_title"
                  placeholder="Teaching Title"
                  id='signUpTeachTitle'
                  value={signUpTeachTitle}
                  onChange={this.handleChange}
                /><br />
                <button className='acct' onClick={this.onSignUp}>Sign Up</button>
              </div>
    
            </div>
          );
        }
    
        return (
          <div className = "accountSummary">
            <NavBar />
            <p>Account</p>
            <p>Username: {this.state.signInDisplayName}</p>
            <p>First Name: {this.state.signInNameFirst}</p>
            <p>Last Name: {this.state.signInNameLast}</p>
            <p>Teaching Position: {this.state.signInTeachTitle}</p>
            <button onClick={this.logout}>Logout</button>
          </div>
        );
      }
}

export default Account;