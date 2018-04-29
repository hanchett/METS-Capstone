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
        //this.logout = this.logout.bind(this);
        //console.log(this.state)
    }

<<<<<<< HEAD
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
=======
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
    }
    
    onTextboxChangeSignInEmail(event) {
        this.setState({
            signInEmail: event.target.value,
        });
    }

    onTextboxChangeSignUpEmail(event) {
        this.setState({
            signUpEmail: event.target.value,
        });
    }

    onTextboxChangeSignInPassword(event) {
        this.setState({
            signInPassword : event.target.value,
        });
    }
    
    onTextboxChangeSignUpPassword(event) {
        this.setState({
            signUpPassword : event.target.value,
        });
    }
    
    onTextboxChangeSignInDisplayName(event) {
        this.setState({
            signInDisplayName : event.target.value,
        });
    }

    onTextboxChangeSignUpDisplayName(event) {
        this.setState({
            signUpDisplayName : event.target.value,
        })
    }
    
    onTextboxChangeSignInNameFirst(event) {
        this.setState({
            signInNameFirst : event.target.value,
        });
    }
    
    onTextboxChangeSignUpNameFirst(event) {
        this.setState({
            signUpNameFirst : event.target.value,
        });
    }
    
    onTextboxChangeSignInNameLast(event) {
        this.setState({
            signInNameLast : event.target.value,
        });
    }
    
    onTextboxChangeSignUpNameLast(event) {
        this.setState({
            signUpNameLast : event.target.value,
        });
    }
    
    onTextboxChangeSignInTeachTitle(event) {
        this.setState({
            signInTeachTitle : event.target.value,
        });
    }
    
    onTextboxChangeSignUpTeachTitle(event) {
>>>>>>> aee22d2550c778b20673f066f9a557522cdc4656
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
            .then(res => res.json())
            .then(json => {
                console.log('json', json);
                if (json.success) {
                    this.setState({
                        signInError: json.message,
                        isLoading: false,
                        signInEmail: '',
                        signInPassword: '',
                        token: json.token
                    });
                } else {
                    this.setState({
                        signUpError: json.message,
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
                        signInNameFirst: res.data[0].first_name,
                        signInNameLast: res.data[0].last_name,
                        signInTeachTitle: res.data[0].teaching_title,
                    });
                    console.log(this.state);
                } else {
                    this.setState({
                        signInError: res.message,
                        isLoading: false,
                    });
                }
            });
    }

    render() {
        console.log("Here render")
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
          <div>
            <p>Account</p>
            <button onClick={this.logout}>Logout</button>
          </div>
        );
      }
}

export default Account;