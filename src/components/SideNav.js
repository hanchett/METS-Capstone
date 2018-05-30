import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

import './css/SideNav.css';


class SideNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displaySideNav: 'none',
            callback: props.callback,
            openSubject: false,
            openDisability: false,
            openChallenge: false,
            openGradeLevel : false,
            filters: []
        }
    }

    toggleSide() {
        let dispState = '';
        if (this.state.displaySideNav === 'none') {
            dispState = 'block';
            this.state.callback(true);
        } else {
            dispState = 'none';
            this.state.callback(false);

        }
        this.setState({
            displaySideNav: dispState
        });
    }

    openSubject(e) {
        this.setState({ openSubject: !this.state.openSubject });
    }

    openDisability(e) {
        this.setState({ openDisability: !this.state.openDisability });
    }

    openChallenge(e) {
        this.setState({openChallenge : !this.state.openChallenge});
    }

    openGradeLevel(e) {
        this.setState({openGradeLevel : !this.state.openGradeLevel});
    }

    selectFilter(e) {
        let button = e.target;
        let filters = this.state.filters;
        if (filters.includes(button.value)) {
            button.style.backgroundColor = 'rgba(255, 255, 255, .1)';
            filters.pop(button.value);
        } else {
            filters.push(button.value);
            button.style.backgroundColor = '#7280D7';
        }
        this.setState({ filters: filters });
    }

    render() {
        //console.log(this.state.filters);
        let hamburger = <FontAwesome
            name='fas fa-bars'
            size='2x'
        />

        let exit = <FontAwesome
            name='fas fa-times'

        />
        let sideDisp = this.state.displaySideNav;
        let hamDisp = sideDisp === 'block' ? 'none' : 'inline-block';
        const subjectDisp = this.state.openSubject ? 'block' : 'none';
        const disabilityDisp = this.state.openDisability ? 'block' : 'none';
        const challengeDisp = this.state.openChallenge ? 'block' : 'none';
        const gradeLevelDisp = this.state.openGradeLevel ? 'block' : 'none';
        return (
            <div>
                <div className="sidenav" style={{ display: sideDisp }}>
                    <button className='close' onClick={this.toggleSide.bind(this)}>{exit}</button>
                    <div className="filters">
                        <div className='subject'>
                            <h3 onClick={this.openSubject.bind(this)}>
                                Subject
                            </h3>
                            <ul className='subjectList' style={{ display: subjectDisp }}>
                                <button className="subjectListItem" value="english" onClick={this.selectFilter.bind(this)} value="english">English</button>
                                <button className="subjectListItem" value="reading" onClick={this.selectFilter.bind(this)}>Reading</button>
                                <button className="subjectListItem" value="writing" onClick={this.selectFilter.bind(this)}>Writing</button>
                                <button className="subjectListItem" value="math" onClick={this.selectFilter.bind(this)}>Math</button>
                                <button className="subjectListItem" value="science" onClick={this.selectFilter.bind(this)}>Science</button>
                            </ul>
                        </div>
                        <div className='disability'>
                            <h3 onClick={this.openDisability.bind(this)}>
                                Learning Disabilities
                            </h3>
                            <ul className='subjectList disability' style={{ display: disabilityDisp }}>
                                <button className="subjectListItem" value="auditory" onClick={this.selectFilter.bind(this)} >
                                    Auditory perception & processing
                                </button>
                                <button className="subjectListItem" value="visual" onClick={this.selectFilter.bind(this)}>
                                    Visual perception & processing
                                </button>
                                <button className="subjectListItem" value="info" onClick={this.selectFilter.bind(this)}>
                                    Information processing speed
                                </button>
                                <button className="subjectListItem" value="reason" onClick={this.selectFilter.bind(this)}>
                                    Abstract reasoning
                                </button>
                                <button className="subjectListItem" value="retention" onClick={this.selectFilter.bind(this)}>
                                    Retention
                                </button>
                                <button className="subjectListItem" value="language" onClick={this.selectFilter.bind(this)}>
                                    Spoken and written language
                                </button>
                                <button className="subjectListItem" value="math" onClick={this.selectFilter.bind(this)}>
                                    Mathematical calculation
                                </button>
                            </ul>
                        </div>
                        <div className='challenge'>
                            <h3 onClick={this.openChallenge.bind(this)}>
                                Student Challenges
                            </h3>
                            <ul className='subjectList challenge' style={{ display: challengeDisp }}> 
                                <button className="subjectListItem" value="esl" onClick={this.selectFilter.bind(this)}>ESL</button>
                                <button className="subjectListItem" value="attendance" onClick={this.selectFilter.bind(this)}>Attendance</button>
                                <button className="subjectListItem" value="supplemental" onClick={this.selectFilter.bind(this)}>Supplemental Education</button>

                            </ul>

                        </div>
                        <div className='gradeLevel'>
                            <h3 onClick={this.openGradeLevel.bind(this)}>
                                Grade Levels
                            </h3>
                            <ul className='subjectList gradeLevel' style={{ display: gradeLevelDisp }}> 
                                <button className="subjectListItem" value="K-5" onClick={this.selectFilter.bind(this)}>K-5</button>
                                <button className="subjectListItem" value="Middle School" onClick={this.selectFilter.bind(this)}>Middle School</button>
                                <button className="subjectListItem" value="High School" onClick={this.selectFilter.bind(this)}>High School</button>

                            </ul>

                        </div>
                        <div className='research'>
                            <Link to={`search/${this.state.filters}`} style={{ textDecoration: 'none' }}>
                                <div>
                                    Search
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <button className="hamburger" onClick={this.toggleSide.bind(this)} style={{ display: hamDisp }}>{hamburger}</button>
            </div>
        )
    }


}

export default SideNav