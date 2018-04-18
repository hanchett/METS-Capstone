import React, { Component } from 'react';
import NavBar from './NavBar';

import './css/NewProduct.css'


class NewProduct extends Component {
    constructor(props) {
        super(props);
    }


    submitProduct(e) {
        console.log(e);
    }

    render() {
        return (
            <div className='Product'>
                <NavBar />
                <div className="title">
                    <h1>Submit a New Product</h1>
                    <h2>Please include as many details as possible. You'll be able to review your product before it is submitted.</h2>
                </div>

                <form onSubmit={this.submitProduct} className='productForm'>
                    <label className='formLabel titleLabel'>
                        <input type="text" className="formInput" placeholder='Title' />
                    </label>
                    <label className='formLabel'>
                        <input type="text" className="formInput" placeholder='Developer' />
                    </label>

                    <label className='formLabel'>
                        <input type="url" className="formInput" placeholder='Website' />
                    </label>

                    <label className='formLabel'>
                        <input type="text" className="formInput" placeholder='Language' />
                    </label>
                    <label className='formLabel'>
                        <input type="text" className="formInput" placeholder='Age Range' />
                    </label>
                    <br />
                    <label className='formLabel summaryLabel' >
                        <input type="textarea" className="summaryInput" placeholder='Summary' />
                    </label>
                    <br/>
                    <label className='formLabel'>
                        <input type="submit" value="Submit" className='submitBtn' />

                    </label>
                </form>
            </div>
        );
    }
}

export default NewProduct;
