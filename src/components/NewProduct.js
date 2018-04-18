import React, { Component } from 'react';
import NavBar from './NavBar';
import axios from 'axios';

import './css/NewProduct.css'


class NewProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            developer: "",
            website: "",
            languages: [],
            ageRange: [],
            summary: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        console.log(e.target.selectedOptions);
        const inputName = e.target.type === 'select-multiple' ? 'ageRange' : e.target.placeholder.toLowerCase();
        let value = []; 
        if(e.target.selectedOptions) {
            for(let i = 0; i < e.target.selectedOptions.length; i++) {
                value.push(e.target.selectedOptions[i].value);
            }
            console.log(value);

        } else {
            value = e.target.value;
        }
        this.setState({
            [inputName]: value
        });
    }

    submitProduct(e) {
        e.preventDefault()
        const date = '04-18-2018';
        axios.post(`http://localhost:3101/product/new/${this.state.title}/${this.state.developer}/asdas/adasdas/${this.state.summary}/asdadasd/${date}`).then(res => {
            console.log("WORKED");
            console.log(res);
        }).catch(function(err) {
            console.log(err);
        });
    }

    render() {
        return (
            <div className='Product'>
                <NavBar />
                <div className="title">
                    <h1>Submit a New Product</h1>
                    <h2>Please include as many details as possible. You'll be able to review your product before it is submitted.</h2>
                </div>

                <form onSubmit={this.submitProduct.bind(this)} className='productForm'>
                    <label className='formLabel titleLabel'>
                        <input type="text" className="formInput" placeholder='Title' onChange={this.handleChange} />
                    </label>
                    <label className='formLabel'>
                        <input type="text" className="formInput" placeholder='Developer' onChange={this.handleChange} />
                    </label>

                    <label className='formLabel'>
                        <input type="url" className="formInput" placeholder='Website' onChange={this.handleChange} />
                    </label>

                    <label className='formLabel'>
                        <h3>Language</h3>
                        <select multiple={true} className='selectAge' onChange={this.handleChange}>
                            <option value='af'>Afrikaans</option>
                            <option value='sq'>Albanian</option>
                            <option value='am'>Amharic</option>
                            <option value='ar'>Arabic</option>
                            <option value='hy'>Armenian</option>
                            <option value='az'>Azerbaijani</option>
                            <option value='eu'>Basque</option>
                            <option value='be'>Belarusian</option>
                            <option value='bn'>Bengali</option>
                            <option value='bs'>Bosnian</option>
                            <option value='bg'>Bulgarian</option>
                            <option value='ca'>Catalan</option>
                            <option value='ceb'>Cebuano</option>
                            <option value='ny'>Chichewa</option>
                            <option value='zh-CN'>Chinese</option>
                            <option value='co'>Corsican</option>
                            <option value='hr'>Croatian</option>
                            <option value='cs'>Czech</option>
                            <option value='da'>Danish</option>
                            <option value='nl'>Dutch</option>
                            <option value='en'>English</option>
                            <option value='eo'>Esperanto</option>
                            <option value='et'>Estonian</option>
                            <option value='tl'>Filipino</option>
                            <option value='fi'>Finnish</option>
                            <option value='fr'>French</option>
                            <option value='fy'>Frisian</option>
                            <option value='gl'>Galician</option>
                            <option value='ka'>Georgian</option>
                            <option value='de'>German</option>
                            <option value='el'>Greek</option>
                            <option value='gu'>Gujarati</option>
                            <option value='ht'>Haitian Creole</option>
                            <option value='ha'>Hausa</option>
                            <option value='haw'>Hawaiian</option>
                            <option value='iw'>Hebrew</option>
                            <option value='hi'>Hindi</option>
                            <option value='hmn'>Hmong</option>
                            <option value='hu'>Hungarian</option>
                            <option value='is'>Icelandic</option>
                            <option value='ig'>Igbo</option>
                            <option value='id'>Indonesian</option>
                            <option value='ga'>Irish</option>
                            <option value='it'>Italian</option>
                            <option value='ja'>Japanese</option>
                            <option value='jw'>Javanese</option>
                            <option value='kn'>Kannada</option>
                            <option value='kk'>Kazakh</option>
                            <option value='km'>Khmer</option>
                            <option value='ko'>Korean</option>
                            <option value='ku'>Kurdish (Kurmanji)</option>
                            <option value='ky'>Kyrgyz</option>
                            <option value='lo'>Lao</option>
                            <option value='la'>Latin</option>
                            <option value='lv'>Latvian</option>
                            <option value='lt'>Lithuanian</option>
                            <option value='lb'>Luxembourgish</option>
                            <option value='mk'>Macedonian</option>
                            <option value='mg'>Malagasy</option>
                            <option value='ms'>Malay</option>
                            <option value='ml'>Malayalam</option>
                            <option value='mt'>Maltese</option>
                            <option value='mi'>Maori</option>
                            <option value='mr'>Marathi</option>
                            <option value='mn'>Mongolian</option>
                            <option value='my'>Myanmar (Burmese)</option>
                            <option value='ne'>Nepali</option>
                            <option value='no'>Norwegian</option>
                            <option value='ps'>Pashto</option>
                            <option value='fa'>Persian</option>
                            <option value='pl'>Polish</option>
                            <option value='pt'>Portuguese</option>
                            <option value='pa'>Punjabi</option>
                            <option value='ro'>Romanian</option>
                            <option value='ru'>Russian</option>
                            <option value='sm'>Samoan</option>
                            <option value='gd'>Scots Gaelic</option>
                            <option value='sr'>Serbian</option>
                            <option value='st'>Sesotho</option>
                            <option value='sn'>Shona</option>
                            <option value='sd'>Sindhi</option>
                            <option value='si'>Sinhala</option>
                            <option value='sk'>Slovak</option>
                            <option value='sl'>Slovenian</option>
                            <option value='so'>Somali</option>
                            <option value='es'>Spanish</option>
                            <option value='su'>Sundanese</option>
                            <option value='sw'>Swahili</option>
                            <option value='sv'>Swedish</option>
                            <option value='tg'>Tajik</option>
                            <option value='ta'>Tamil</option>
                            <option value='te'>Telugu</option>
                            <option value='th'>Thai</option>
                            <option value='tr'>Turkish</option>
                            <option value='uk'>Ukrainian</option>
                            <option value='ur'>Urdu</option>
                            <option value='uz'>Uzbek</option>
                            <option value='vi'>Vietnamese</option>
                            <option value='cy'>Welsh</option>
                            <option value='xh'>Xhosa</option>
                            <option value='yi'>Yiddish</option>
                            <option value='yo'>Yoruba</option>
                            <option value='zu'>Zulu</option>
                        </select>
                    </label>
                    <label className='formLabel'>
                        <h3>Age Group </h3>
                        <select multiple={true} className='selectAge' onChange={this.handleChange}>
                            <option value="k-5">K-5th Grade</option>
                            <option value="middle">Middle School</option>
                            <option value="high">High School</option>
                        </select>
                    </label>
                    <br />
                    <label className='formLabel summaryLabel' >
                        <input type="textarea" className="summaryInput" placeholder='Summary' onChange={this.handleChange} />
                    </label>
                    <br />
                    <label className='formLabel'>
                        <input type="submit" value="Submit" className='submitBtn' />

                    </label>
                </form>
            </div>
        );
    }
}

export default NewProduct;
