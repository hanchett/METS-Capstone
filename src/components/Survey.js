import React, { Component } from 'react';
import NavBar from './NavBar';
import './css/Survey.css';


class Survey extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: 0
        }
    }



    nextQ(e) {
        console.log('Working?');
        console.log(e.target.parentNode);

        new Promise((resolve, reject) => {
            e.target.parentNode.classList.toggle('clicked');
            resolve(e.target.parentNode);
        }).then((e) => {
            console.log(e)
            e.style.display = 'none';
        });
       
    }

    render() {
        return (
            <div className='survey'>
                <div className="hello">
                    <h1>Welcome to Crrclm.io</h1>
                    <h2>Please take a minute to work through this brief survey.</h2>
                    <button className='surveyBtn' onClick={this.nextQ.bind(this)}>Continue</button>
                </div>
                <div className="questionOne">
                    <h1>
                        How do your students learn?
                    </h1>
                    <button>
                        <div className="cover">
                        </div>
                        Learn by seeing
                    </button>
                    <button>
                        Learn by doing
                    </button>

                </div>
            </div>
        );
    }
}
export default Survey;