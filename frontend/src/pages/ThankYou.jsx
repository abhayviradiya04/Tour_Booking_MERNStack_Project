import React from "react";
import {Container,Row,Col,Button} from 'reactstrap'
import {Link} from 'react-router-dom'; 
import '../style/thank-you.css'

const ThankYou=()=>{
    return <>
    <section>
        <Container>
            <Row>
                <Col lg='12' className="pt-5 text-center">
                    <div className="thank__you">
                        <span>
                            <i class="ri-checkbox-circle-line"></i>
                        </span>
                        <h1 className="mb-3 fw-semibold">Thank You</h1>
                        <h3 className="mb-4">your tour is booked.</h3>

                        <Button className="btn  w-25" style={{background:"#9400FF"}}><Link className="link-light link" to="/home">Back to Home</Link></Button>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    </>
    
}

export default ThankYou;