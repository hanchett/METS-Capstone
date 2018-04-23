import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import './css/Account.css';
import axios from 'axios';

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
        
        this.onTextboxChangeSignInEmail = this.onTextboxChangeSignInEmail.bind(this);
        this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
        this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this);
        this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);
        this.onTextboxChangeSignInDisplayName = this.onTextboxChangeSignInDisplayName.bind(this);
        this.onTextboxChangeSignUpDisplayName = this.onTextboxChangeSignUpDisplayName.bind(this);
        this.onTextboxChangeSignInNameFirst = this.onTextboxChangeSignInNameFirst.bind(this);
        this.onTextboxChangeSignUpNameFirst = this.onTextboxChangeSignUpNameFirst.bind(this);
        this.onTextboxChangeSignInNameLast = this.onTextboxChangeSignInNameLast.bind(this);
        this.onTextboxChangeSignUpNameLast = this.onTextboxChangeSignUpNameLast.bind(this);
        this.onTextboxChangeSignInTeachTitle = this.onTextboxChangeSignInTeachTitle.bind(this);
        this.onTextboxChangeSignUpTeachTitle = this.onTextboxChangeSignUpTeachTitle.bind(this);

        //this.onSignIn = this.onSignIn.bind(this);
        this.onSignUp = this.onSignUp.bind(this);
        //this.logout = this.logout.bind(this);
        //console.log(this.state)
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
        this.setState({
            signUpTeachTitle : event.target.value,
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
        axios.post(`http://localhost:3101/account/${signUpEmail}/${signUpPassword}/${signUpDisplayName}/${signUpNameFirst}/${signUpNameLast}/${signUpTeachTitle}`)
            .then(res => res.json())
            .then(json => {
                console.log('json', json);
                if (json.success) {
                    this.setState({
                        signUpError: json.message,
                        isLoading: false,
                        signUpEmail: '',
                        signUpPassword: '',
                        signUpDisplayName: '',
                        signUpNameFirst: '',
                        signUpNameLast: '',
                        signUpTeachTitle: '',
                    });
                } else {
                    this.setState({
                        signUpError: json.message,
                        isLoading: false,
                    });
                }
            });
    }



    // testAccount(e) {
    //     console.log("Here test");
    //     this.state.email = "test@test.com";
    //     this.state.password = "test123";
    //     this.state.display_name = "admin";
    //     this.state.name_first = "Ichiro";
    //     this.state.name_last = "Suzuki";
    //     this.state.grade_level = "All";
    //     console.log(this.state);

    //     const { email, password, display_name, name_first, name_last, teach_title } = this.state;

    //     axios.post(`http://localhost:3101/account/${email}/${password}/${display_name}/${name_first}/${name_last}/${teach_title}`)
    //         .then((result) => {
    //             console.log("WORKED???");
    //         })
    //     .catch(function (error) {
    //         console.log("Shit");
    //         console.log(error)
    //     });
    // }
    
    // render() {
    //     console.log("Here render")
    //     let paddingTop = this.state.displaySideNav === true ? '130px'  : '0px';
    //     return(
    //         <div>
    //             <NavBar />
    //             <div className='main'>
    //                 <button className='testAccount' onClick={this.testAccount.bind(this)}>
    //                     Create Test Account
    //                 </button>
    //             </div>
    //         </div>
    //     )
    // }

    render() {
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
              <div>
                {
                  (signInError) ? (
                    <p>{signInError}</p>
                  ) : (null)
                }
                <p>Sign In</p>
                <input
                  type="email"
                  placeholder="Email"
                  value={signInEmail}
                  onChange={this.onTextboxChangeSignInEmail}
                />
                <br />
                <input
                  type="password"
                  placeholder="Password"
                  value={signInPassword}
                  onChange={this.onTextboxChangeSignInPassword}
                />
                <br />
                <button onClick={this.onSignIn}>Sign In</button>
              </div>
              <br />
              <br />
              <div>
                {
                  (signUpError) ? (
                    <p>{signUpError}</p>
                  ) : (null)
                }
                <p>Sign Up</p>
                <input
                  type="email"
                  placeholder="Email"
                  value={signUpEmail}
                  onChange={this.onTextboxChangeSignUpEmail}
                /><br />
                <input
                  type="password"
                  placeholder="Password"
                  value={signUpPassword}
                  onChange={this.onTextboxChangeSignUpPassword}
                /><br />
                <input
                  type="display_name"
                  placeholder="Account Display Name"
                  value={signUpDisplayName}
                  onChange={this.onTextboxChangeSignUpDisplayName}
                /><br />
                <input
                  type="name_first"
                  placeholder="First Name"
                  value={signUpNameFirst}
                  onChange={this.onTextboxChangeSignUpNameFirst}
                /><br />
                <input
                  type="name_last"
                  placeholder="Last Name"
                  value={signUpNameLast}
                  onChange={this.onTextboxChangeSignUpNameLast}
                /><br />
                <input
                  type="teach_title"
                  placeholder="Teaching Title"
                  value={signUpTeachTitle}
                  onChange={this.onTextboxChangeSignUpTeachTitle}
                /><br />
                <button className='testAccount' onClick={this.onSignUp}>Sign Up</button>
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