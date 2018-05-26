// Imported libraries and components 
import React, { Component } from 'react';
import NavBar from './NavBar';
import SideNav from './SideNav';
import ItemCardList from './ItemCardList';

// Styles 
import './css/Search.css';

class Search extends Component {
    constructor(props) {
        super(props);
        let subjects,
            disabilities,
            circumstances;
        if (props.match.params.subjects) {
            subjects = props.match.params.subjects.split(",");
        }
        if (props.match.params.disabilities) {
            disabilities = props.match.params.disabilities.split(',');
        }
        if (props.match.params.circumstances) {
            circumstances = props.match.params.circumstances.split(',');
        }
        this.state = {
            subjects: subjects,
            disabilities: disabilities,
            circumstances: circumstances,
            displaySideNav: 'false'
        }
        if (props.match.params.survey) {
            // this.mapSurvey = this.mapSurvey.bind(this);
        } else {
            // this.mapSearch = this.mapSearch.bind(this);
        }
        console.log(this.props.style);
        document.body.style.overflow = 'auto';
    }

    // mapSearch() {
    //     const subjects = this.state.subjects;
    //     const disabilities = this.state.disabilities;
    //     const circumstances = this.state.circumstances;
    //     axios.get(`/search/${subjects}`)


    // }

    // mapSurvey() {
    //     let filters = this.state.filters;
    //     const category = 0;
    //     const age = filters[2];
    //     const lang = filters[7];
    //     // axios.get(`/search/${category}/${age}/${lang}`).then(res => {
    //     //     this.setState({
    //     //         cards: res.data
    //     //     });
    //     // }).catch(function (err) {
    //     //     console.log("Error ", err);
    //     // });
    //     axios.post(`http://localhost:3101/comments/bob/asdasdsa/${'04-13-2018'}`).then(res => {
    //         console.log('WORKED');
    //         console.log(res);
    //     }).catch(function (err) {
    //         console.log("Error ", err);
    //     });
    // }


    // componentDidMount() {
    //     this.mapSurvey();
    //     setInterval(this.mapSurvey, 5000);
    // }


    // handleFilterChange() {
    // }


    addMargin(yn) {
        this.setState({
            displaySideNav: yn
        });
    }


    render() {
        let paddingTop = this.state.displaySideNav === true ? '130px' : '0px';
        return (
            <div>
                <NavBar />
                <SideNav callback={this.addMargin.bind(this)} />
                <div className='results' style={{ paddingTop: paddingTop }}>
                    <div className='row'>
                        <ItemCardList filters={this.state.subjects3} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;

