import React from 'react';
import Select from 'react-select';



const SUBJECT = [
    { label: 'English', value: 'chocolate' },
    { label: 'Reading', value: 'vanilla' },
    { label: 'Writing', value: 'strawberry' },
    { label: 'Math', value: 'caramel' },
    { label: 'Science', value: 'peppermint' },
];

const BARRIER = [
    { label: 'ESL', value: 'vanilla' },
    { label: 'Blindness', value: 'strawberry' },
    { label: 'Deafness', value: 'caramel' },
    { label: 'Supplementary Learning', value: 'peppermint' },
];

const STYLE = [
    { label: 'Visual', value: 'strawberry' },
    { label: 'Auditory', value: 'caramel' },
    { label: 'Kinesthetic', value: 'peppermint' },
];


class MultiSelect extends React.Component {
    state = {
        selectedOption: '',

    }

    handleChange = (value) => {
        console.log("working?")
        console.log(value)
        this.setState({ value });
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
            [e.target.name]: e.target.checked,
        });
    }

    toggleRtl(e) {
        let rtl = e.target.checked;
        this.setState({ rtl });
    }

    

    render() {
        const { selectedOption, value } = this.state;
        const options = SUBJECT;
        let style = {
            textAlign: 'center',
        }

        return (
            <div className='section'>
                <Select
                    closeOnSelect={false}
                    disabled={false}
                    multi
                    onChange={this.handleChange}
                    options={options}
                    placeholder="Subject"
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