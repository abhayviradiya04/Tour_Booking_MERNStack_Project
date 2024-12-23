
import React from "react"
import CommonSection from "../shared/CommonSection.jsx";
import { Container, Row, Col } from "reactstrap";

import Newslatter from './../shared/Newsletter.jsx'

const About = () => {


    

    

    return (
        <>
            <CommonSection title={"About"} />
            <section>
                <Container>
                    <Row>
                        <Col>
                        <h3 >Our Services</h3>
                        </Col>
                    </Row>
                    <Row>  <Col>From private guided tours to group expeditions, we offer a comprehensive range of services designed to cater to every type of traveler. Our offerings include:</Col></Row>
                  <Row></Row>
                    <Row><Col><b>1.Tailored Itineraries :</b> Every journey we craft is unique, designed to reflect your interests, preferences, and travel style.</Col></Row>
                    <Row><Col><b>2.Expert Guidance :</b> Our team of experienced travel specialists is here to provide expert advice and personalized recommendations, ensuring your trip exceeds all expectations.</Col></Row>
                    <Row><Col><b>3.VIP Access :</b> Enjoy exclusive access to top attractions, private tours, and immersive cultural experiences that go beyond the ordinary.</Col></Row>
                    <Row><Col><b>4.24/7 Support : </b>Travel with confidence knowing that our dedicated support team is available around the clock to assist you with any inquiries or emergencies.</Col></Row>
                </Container>
            </section>
            <Newslatter/>

        </>
    )
}

export default About;