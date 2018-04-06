import React, { Component } from 'react';
import NavBar from './NavBar';
import './css/Survey.css';


class Survey extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: 0,
            q1: '',
            q2: '',
            q3: '',
            q4: '',
            q5: '',
            q6: '',
            q7: '',
            q8: ''
        }
    }

    answeredQuestion(e) {
        let question = this.state.question;
        console.log(e.target.id);
        this.setState({
            question: e.target.id
        });
        console.log(e);
        this.nextQ(e);
    }

    nextQ(e) {
        console.log(e.target.parentNode);
        e.target.parentNode.style.left = '0';

        e.target.parentNode.style.transform = 'translate(-100%)';
        let newQuestion = 'q' + (this.state.question + 1);
        this.setState({ question: (this.state.question + 1) }, function () {
            let newElement = this.refs[newQuestion];
            newElement.style.display = 'block';
            setInterval(function () {
                newElement.style.transform = 'translate(-100%)';
            }, 50);
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
                <div className="question questionOne" ref='q1'>
                    <h1>
                        How do your students learn?
                    </h1>
                    <button className='qBtn' id='1' onClick={this.answeredQuestion.bind(this)}>
                        Learn by seeing
                    </button>
                    <button className='qBtn' id='2' onClick={this.answeredQuestion.bind(this)}>
                        Learn by doing
                    </button>
                </div>
                <div className='question questionTwo' ref='q2'>
                    <h1>What education level do you teach?</h1>
                    <button className='qBtn'>
                        K-5
                    </button>
                    <button className='qBtn'>
                        Middle School 
                    </button>
                    <button className='qBtn'>
                        High School 
                    </button>
                </div>
            </div>
        );
    }
}
export default Survey;