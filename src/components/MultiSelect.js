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
    { label: 'Auditory perception & processing', value: 'auditory' },
    { label: 'Visual perception & processing', value: 'visual' },
    { label: 'Information processing speed', value: 'info' },
    { label: 'Abstract reasoning', value: 'reason' },
    { label: 'Retention', value: 'memory'},
    { label: 'Spoken and written language', value: 'lang'},
    { label: 'Mathematical calculation', value: 'calc'},
];

const CIRCUMSTANCE = [
    { label: 'ESL', value: 'esl' },
    { label: 'Attendance', value: 'attendance' },
    { label: 'Supplemental Education', value: 'supplemental' },
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
        if(name === 'circumstance') {
            return CIRCUMSTANCE;
        } else if (name === 'barrier') {
            return BARRIER;
        } else {
            return SUBJECT;
        }



    }

    render() {
        const { selectedOption, value, name, placeholder } = this.state;
        let style = {
            width: '300px',
            textAlign: 'center',
            color: 'black',

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