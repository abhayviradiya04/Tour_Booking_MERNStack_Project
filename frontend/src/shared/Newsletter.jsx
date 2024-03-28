/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import './newslatter.css';
import { Container,Row,Col } from "reactstrap";
import maleTourist from '../assets/images/male-tourist.png'
const Newsletter = ()=>{
    return(
        <section className="newslatter">
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="newsletter__content">
                            <h2>Subscribe now to get useful traveling information.</h2>

                        <div className="newslatter__input">
                            <input type="email" placeholder="Enter your E-mail"/>
                            <button className="btn newslatter__btn">Subscribe</button>
                        </div>

                        <p>
                        Embark on a journey of discovery with our exclusive travel insights. Subscribe now for insider tips, destination guides, and special offers.
                        </p>
                        </div>
                    </Col>
                    <Col lg='6'>
                        <div className="newslatter__img">
                            <img src={maleTourist}/>
                                </div>                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Newsletter;