
import { React, useState,useContext} from "react";
import './booking.css'
import { Form, FormGroup, ListGroup, ListGroupItem, Button,  } from 'reactstrap';
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext.js";
import { BASE_URL } from "../../utils/config.js";
import Swal from "sweetalert2";

const Booking = ({ tour, avgRating }) => {

    const { price, reviews ,title} = tour;
    const navigate=useNavigate();

    const {user}=useContext(AuthContext);

    const [booking,setBooking] = useState({
        userId: user && user._id,
        userEmail: user && user.email,
        tourName: title,
        fullName:"",
        phone:"",
        guestSize:1,
        bookAt:"",
    })

    const handlechange=e=>{
        setBooking(prev=>({...prev,[e.target.id]:e.target.value}))
    };

    const serviceFee = 10;
    const totalAmount=Number(price) * Number(booking.guestSize) + Number(serviceFee)
    

    

    const handleClick = async e=>{
        e.preventDefault()

        console.log(booking);

        try {
            if(!user || user===undefined || user===null){
                return alert('Please sign in')
            }
            const res = await fetch(`${BASE_URL}/booking`, {
                method: "post",
                headers: {
                    "content-type": "application/json", 
                },
                credentials: "include",
                body: JSON.stringify(booking),
            });
            const result = await res.json()
            if (!res.ok) {
                
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: result.message,
                });
                return;
            }
        
         
        
            navigate("/thank-you");
        } catch (err) {
            alert(err.message);
            // console.log(err)
          
        }
        

       
    }


    return <>
        <div className="booking">
            <div className="booking__top d-fkex align-items-centre justify-content-between">
                <h3>
                    ${price} <span> /per person/ </span>
                </h3>
                <span className="tour__rating d-flex align-items-center">
                    <i class="ri-star-fill" ></i>
                    {avgRating === 0 ? null : avgRating} ({reviews?.length})


                </span>
            </div>


            {/* ==========booking form=============== */}
            <div className="booking__form">
                <h5>Information</h5>
                <Form className="booking__info-form" onSubmit={handleClick}>
                    <FormGroup>
                        <input type="text" placeholder="Full name" id="fullName" required onChange={handlechange}></input>
                    </FormGroup>
                    <FormGroup>
                        <input type="number" placeholder="Phone" id="phone" required onChange={handlechange}></input>
                    </FormGroup>
                    <FormGroup className="d-flex align-items-center gap-3">
                        <input type="date" placeholder="" id="bookAt" required onChange={handlechange}></input>
                        <input type="number" placeholder="Guest" id="guestSize" required onChange={handlechange}></input>
                    </FormGroup>
                </Form>
            </div>

            {/* ====booking bottom==== */}
            <div className="booking__bottom">
                <ListGroup>
                    <ListGroupItem className="borser-0 px-0">
                        <h5 className="d-flex align-items-center gap-1">
                            ${price} <i class="ri-close-line"></i> 1 person </h5>
                            <span> ${price} </span>
                        
                    </ListGroupItem>
                    <ListGroupItem className="borser-0 px-0">
                        <h5>Service charge</h5>
                        <span> ${serviceFee} </span>
                    </ListGroupItem>
                    <ListGroupItem className="borser-0 px-0 total">
                        <h5>Total</h5>
                        <span> ${totalAmount} </span>
                    </ListGroupItem>
                </ListGroup>

                <Button className="btn  w-100 mt-4" style={{background:"#9400FF"}} onClick={handleClick}>
                    Book Now
                </Button>
            </div>
        </div>
    </>
}

export default Booking;