import React, { Component } from 'react';
import NavBar from './NavBar';
import SideNav from './SideNav';


import './css/Review.css';

class Review extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <SideNav display={false} />
                <div className="product">
                    <div className="productTitle">
                        <img src={require("../img/wireframe-image.png")} alt="placeholder" />
                        <div className="info">
                            <h1>Product Name</h1>
                            <h2>Product Developer</h2>
                            <h2>Product URL</h2>
                            <div className="rating">
                                <h2>Rating</h2>
                            </div>
                        </div>

                    </div>
                    <div className="summary">
                        <h2 className="summaryTitle">Summary</h2>
                        <div className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, sint corrupti quisquam, libero tenetur a exercitationem temporibus dolorum dignissimos beatae aut quasi eum non molestiae voluptatem neque suscipit dolores earum? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo tempora porro sed voluptates, dicta, modi molestias incidunt in nihil, eaque maxime. Minus quae quod ratione voluptas. Pariatur illum molestiae delectus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, sint corrupti quisquam, libero tenetur a exercitationem temporibus dolorum dignissimos beatae aut quasi eum non molestiae voluptatem neque suscipit dolores earum? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo tempora porro sed voluptates, dicta, modi molestias incidunt in nihil, eaque maxime. Minus quae quod ratione voluptas. Pariatur illum molestiae delectus?</div>
                    </div>
                    <div className="reviews">
                        <h2 className="reviewTitle">Reviews</h2>
                        <ul class="nav nav-pills">
                            {/* <li class="active"><a href="#">Home</a></li>
                            <li><a href="#">Menu 1</a></li>
                            <li><a href="#">Menu 2</a></li>
                            <li><a href="#">Menu 3</a></li> */}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

}

export default Review