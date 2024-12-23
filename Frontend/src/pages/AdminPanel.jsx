
import React from "react"
import CommonSection from "../shared/CommonSection.jsx";
import { Container, Row, ButtonGroup, Button } from "reactstrap";


import Newslatter from './../shared/Newsletter.jsx'
import '../style/adminPanel.css'

import { Link, Outlet} from "react-router-dom";


const AdminPanel = () => {

        var role = localStorage.getItem('role');
        return role === "admin" ? 
         (
            <>
                <CommonSection title={"Admin Panel"} />
                <section>
                    <Container>
                        <Row>
                         <ButtonGroup>
                         <Button className="button_style "><Link className="link link-light button_style" to="/admin">All Tours</Link></Button>
                          <Button className="button_style "><Link className="link link-light button_style" to="/admin/adminBooking">Show Booking Tours</Link></Button>
                          <Button className="button_style "><Link className="link link-light button_style" to="/admin/review">Show All Reviews</Link></Button>
                         </ButtonGroup>
                        </Row>
                        <Outlet/>
                    </Container>
                    
                  <div >
                  <Link className="position-fixed bottom-0 end-0 m-5 btn btn-lg link-light rounded-circle" style={{background:"#9400FF"}} to={"/addtour/0"}>+</Link>
                  
                  </div>
                    
                </section>
                <Newslatter/>

              
            </>
        )
        :
        (
            <CommonSection title={"You are not Admin"} />
        )
}

export default AdminPanel;