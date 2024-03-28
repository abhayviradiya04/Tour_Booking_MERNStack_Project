/* eslint-disable jsx-a11y/alt-text */

import React from "react"
import '../style/Home.css'
import { Container, Row, Col } from "reactstrap";
import heroImg from '../assets/images/kedarnath'
import heroImg02 from '../assets/images/trambkeshwer.JPG'
import heroVideo from '../assets/images/Ramnath.mp4'
import worldImg from '../assets/images/world.png'
import experinceImg from '../assets/images/experience.png'



import Subtittle from '../shared/Subtittle'

import SearchBar from '../shared/SearchBar';
import ServiceList from "../services/ServiceList";
import FeaturedTouList from "../components/featured-tour/FeaturedTourList";
import MesonryImagesGallery from "../components/Image-gallery/MesonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";

const Home = () => {
    return <>

        {/* {===========Hero section Start============} */}
        <section>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="hero__content">
                            <div className="hero__subtittle d-flex align-items-center" >
                                <h5 className="hero__content__subtitle">
                                Know Before You Go
                                </h5>
                               
                                <img src={worldImg}></img>
                            </div>
                            <h1>Traveling opens the door to creating <span className="highlight">
                                Memories</span></h1>

                            <p>
                            Travelling is an experience that can teach us so many things that you cannot possibly learn while living at home.Firstly, it teaches you how to make new friends. The world is full of people who love interacting. You get to make friends when you travel to new places and spend quality time with them.
                            </p>
                        </div>
                    </Col>

                    <Col lg2>
                        <div className="hero__img-box">
                            <img src={heroImg}></img>
                        </div>
                    </Col>
                    <Col lg2>
                        <div className="hero__img-box hero__vedio-box mt-4">
                            <video src={heroVideo} controls></video>
                        </div>
                    </Col>
                    <Col lg2>
                        <div className="hero__img-box mt-5">
                            <img src={heroImg02}></img>
                        </div>
                    </Col>
                    <SearchBar />
                </Row>
            </Container>
        </section>

        {/* {=======hero section start==========} */}
        <section>
            <Container>
                <Row>
                    <Col ld='3'>
                        <h5 className="services__subtittle">What we serve</h5>
                        <h2 className="services__tittle">We offer our best<br /> services</h2>
                    </Col>
                    <ServiceList />
                </Row>
            </Container>
        </section>


        {/* {======= featured tour section start==========} */}
        <section>
            <Container>
                <Row>
                    <Col lg='12' className="mb-5">
                        <h5 className="featured_tour_subtitle">Explore</h5>
                        {/* <Subtittle subtittle={'Explore'} /> */}
                        <h2 className="featured_tour-title">Our featured tours</h2>
                    </Col>
                    <FeaturedTouList />
                </Row>

            </Container>
        </section>
        {/* {======= Experience section start==========} */}
        <section>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="experince__content">
                            <h5 className="experince__content__subtitle">Experience</h5>
                            <h2>With our all experince <br /> we will serve you</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                <br />Doloremque reiciendis veniam ad optio placeat. Dolorem placeat consequuntur omnis.</p>
                        </div>

                        <div className="counter__wrapper d-flex align-items-center gap-5">
                            <div className="counter__box">
                                <span>12K+</span>
                                <h6>Succesfull trip</h6>
                            </div>
                            <div className="counter__box">
                                <span>2K+</span>
                                <h6>Regular clients</h6>
                            </div>
                            <div className="counter__box">
                                <span>15</span>
                                <h6>Year experince</h6>
                            </div>
                        </div>
                    </Col>
                    <Col lg='6'>
                        <div className="experince__img">
                            <img src={experinceImg}></img>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        {/* {======= Experience section start==========} */}

        <section>
            <Container>
                <Row>
                    <Col lg='12'>
                        <h5 className="gallery__subtitle">
                            Gallery</h5>
                        <h2 className="gallery__title">Visit our customers tour gallery</h2>
                    </Col>
                    
                    <Col lg='12'>
                        <MesonryImagesGallery />
                    </Col>
                
                </Row>
            </Container>
        </section>

        
        {/* {=======testimonial section start==========} */}
        <section>
            <Container>
                <Row>
                    <Col lg='12'>
                        <h5 className="testimonial__subtitle">
                            Fans Love
                        </h5>
                         
                        <h2 className="testimonial__tittle">
                            What our fans say about us
                        </h2>
                    </Col>
                    <Col lg='12'>
                        <Testimonials/>
                    </Col>
                </Row>
            </Container>
        </section>


        <Newsletter/>
    </>
}

export default Home;