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

    finalQuestion(e) {
        let question = this.state.question;
        console.log(e.target.id);
        this.setState({
            question: e.target.id
        });
    }
    answeredQuestion(e) {
        let question = this.state.question;
        console.log(e.target.id);
        this.setState({
            question: e.target.id
        });
        this.nextQ(e);
    }

    // Moves current question off the screen and brings up the new question 
    nextQ(e) {
        e.target.parentNode.style.left = '0';
        e.target.parentNode.style.transform = 'translate(-100%)';
        let newQuestion = 'q' + (this.state.question + 1);

        // Using set state callback to ensure it is up to date when we call the new question
        this.setState({ question: (this.state.question + 1) }, function () {
            let newElement = this.refs[newQuestion];
            newElement.style.display = 'block';
            // Have to delay this function for animation to work properly, runs slightly faster than display 
            setInterval(function () {
                newElement.style.transform = 'translate(-100%)';
            }, 10);
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
                    <button id='1' className='qBtn' onClick={this.answeredQuestion.bind(this)}>
                        K-5
                    </button>
                    <button id='2' className='qBtn' onClick={this.answeredQuestion.bind(this)}>
                        Middle School
                    </button>
                    <button id='3' className='qBtn' onClick={this.answeredQuestion.bind(this)}>
                        High School
                    </button>
                </div>
                <div className="question questionThree" ref='q3'>
                    <h1>What is your technical proficiency?</h1>
                    <button id='1' className="qBtn" onClick={this.answeredQuestion.bind(this)}>
                        Beginner
                    </button>
                    <button id='2' className="qBtn" onClick={this.answeredQuestion.bind(this)}>
                        Intermediate
                    </button>
                    <button id='3' className="qBtn" onClick={this.answeredQuestion.bind(this)}>
                        Advanced
                    </button>
                </div>
                <div className="question questionFour row" ref='q4'>
                    <h1> How frequently do you have access to technology?</h1>
                    <button id='1' className="qBtn col-md-4" onClick={this.answeredQuestion.bind(this)}>
                        Every Day
                    </button>
                    <button id='2' className="qBtn col-md-4" onClick={this.answeredQuestion.bind(this)}>
                        2-3 Times a week
                    </button>
                    <button id='3' className="qBtn col-md-4" onClick={this.answeredQuestion.bind(this)}>
                        Once a week
                    </button>
                    <button id='4' className="qBtn col-md-4" onClick={this.answeredQuestion.bind(this)}>
                        Twice a month
                    </button>
                    <button id='5' className="qBtn col-md-4" onClick={this.answeredQuestion.bind(this)}>
                        Less than twice a month
                    </button>
                </div>
                <div className="question questionFive row" ref='q5'>
                    <h1>What technology platforms do you have access to?</h1>
                    <button id='1' className="qBtn col-md-4" onClick={this.answeredQuestion.bind(this)}>
                        Ipads
                    </button>
                    <button id='2' className="qBtn col-md-4" onClick={this.answeredQuestion.bind(this)}>
                        Android Tablets
                    </button>
                    <button id='3' className="qBtn col-md-4" onClick={this.answeredQuestion.bind(this)}>
                        Laptops
                    </button>
                    <button id='4' className="qBtn col-md-4" onClick={this.answeredQuestion.bind(this)}>
                        Desktop Computers (Mac or Windows)
                    </button>
                </div>
                <div className="question questionSix row" ref='q6'>
                    <h1>Do you work with students with disabilities? Please select all that apply</h1>
                    <button id='1' className="qBtn col-md-4" onClick={this.answeredQuestion.bind(this)}>
                        Auditory perception & processing
                    </button>
                    <button id='2' className="qBtn col-md-4" onClick={this.answeredQuestion.bind(this)}>
                        Visual perception & processing
                    </button>
                    <button id='3' className="qBtn col-md-4" onClick={this.answeredQuestion.bind(this)}>
                        Information processing speed
                    </button>
                    <button id='4' className="qBtn col-md-4" onClick={this.answeredQuestion.bind(this)}>
                        Abstract reasoning
                    </button>
                    <button id='5' className="qBtn col-md-4" onClick={this.answeredQuestion.bind(this)}>
                        Retention
                    </button>
                    <button id='6' className="qBtn col-md-4" onClick={this.answeredQuestion.bind(this)}>
                        Spoken & written language
                    </button>
                    <button id='7' className="qBtn col-md-4" onClick={this.answeredQuestion.bind(this)}>
                        Mathematical Calculation
                    </button>
                </div>
                <div className="question questionSeven row" ref='q7'>
                    <h1>
                        Do you work with students where English is no their first language?
                    </h1>
                    <button className='qBtn' id='1' onClick={this.answeredQuestion.bind(this)}>
                        Yes
                    </button>
                    <button className='qBtn' id='2' onClick={this.answeredQuestion.bind(this)}>
                        No
                    </button>
                </div>
                <div className="question questionSeven row" ref='q8'>
                    <h1>
                        Do you work with students who miss class more than 25 percent of the time?
                    </h1>
                    <Link to='Search'>
                        <button className='qBtn' id='1' onClick={this.finalQuestion.bind(this)}>
                            Yes
                        </button>
                    </Link>
                    <Link to='Search'>
                        <button className='qBtn' id='2' onClick={this.finalQuestion.bind(this)}>
                            No
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}
export default Survey;