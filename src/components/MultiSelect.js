import React from 'react';
import Select from 'react-select';



const SUBJECT = [
    { label: 'English', value: 'english' },
    { label: 'Reading', value: 'reading' },
    { label: 'Writing', value: 'writing' },
    { label: 'Math', value: 'math' },
    { label: 'Science', value: 'science' },
];

const BARRIER = [
    { label: 'ESL', value: 'esl' },
    { label: 'Blindness', value: 'blindness' },
    { label: 'Deafness', value: 'deafness' },
    { label: 'Supplementary Learning', value: 'supplementary' },
];

const STYLE = [
    { label: 'Visual', value: 'visual' },
    { label: 'Auditory', value: 'auditory' },
    { label: 'Kinesthetic', value: 'kinesthetic' },
];


class MultiSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: '',
            name: props.name, 
            placeholder: props.placeholder,
            selected: []
        }
    }
    

    handleChange = (value) => {
        this.setState({
            value: value,
            selected: value
        });
        this.props.addFilter(value);
    }

    getInitialState() {
        return {
            removeSelected: true,
            disabled: false,
            crazy: false,
            stayOpen: false,
            value: [],
            rtl: false,
        };
    }

    toggleCheckbox(e) {
        this.setState({
            [e.target.name]: e.target.checked
        });
    }


    pickOptions(name) {
        if(name === 'style') {
            return STYLE;
        } else if (name === 'barrier') {
            return BARRIER;
        } else {
            return SUBJECT;
        }



    }

    render() {
        const { selectedOption, value, name, placeholder } = this.state;
        let style = {
            width: '250px',
            textAlign: 'center',
            color: 'black'

        }
        return (
            <div className='section'>
                <Select
                    id={"searchDropdown"}
                    closeOnSelect={false}
                    disabled={false}
                    multi
                    onChange={this.handleChange}
                    options={this.pickOptions(name)}
                    placeholder={placeholder}
                    removeSelected={true}
                    rtl={true}
                    simpleValue
                    value={value}
                    style = {style}
                />
            </div>
        );
    }
}


export default MultiSelect;