import {React,useState,useEffect} from "react";
import { Table,Row,Col } from "reactstrap";


export default function AdminBookingTour(){
    const [booking,setBooking]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:4000/api/v1/booking")
        .then((res)=>res.json())
        .then((res)=>{
            console.warn(res.data);
            setBooking(res.data);
        })
    },[]);

    const bookingShow=booking.map((boo)=>{
        return(
            <>

        <Table>
            <Row>
              
                <Col>
                <div class="card text-center mt-5">
  <div class="card-header fw-bold " style={{color:"#fff",background:"#9400FF"}}>
    {boo.fullName}
  </div>
  <div class="card-body">
    <h5 class="card-title">Tour : {boo.tourName}</h5>
    <h3 class="card-text">Guest : {boo.guestSize}</h3>
    <h3 className="card-text ">Phone : {boo.phone}</h3>
    <h2 className="card-text ">Date : {boo.createdAt}</h2>
   </div>
  
</div>
                </Col>
               
            </Row>
        </Table>

            </>
        )
    });

    return (
        <div>
            {bookingShow}
        </div>
    )
}

