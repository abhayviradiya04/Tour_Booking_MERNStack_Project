import React,{useState,useEffect} from "react";
import { useParams,useNavigate } from "react-router-dom";
import '../style/tour-details.css'
import {Container,Row,Col,Table} from 'reactstrap'


const  Form=()=>{

    const param=useParams();
    const navigate=useNavigate();
    const [tour,setTour]=useState({
        title: "",
        city: "",
        address: "",
        distance: "",
        price: "",
        maxGroupSize: "",
        desc: "",
        photo: "",
    });
 
    useEffect(()=>{
        if (param.id !== "0") {
             fetch("http://localhost:4000/api/v1/tours/" + param.id)
                .then((res) => res.json())
                .then((res) =>setTour(res.data))
                .catch((error) => {
                    console.error("Error fetching tour data:", error);
                });

        } else {
            // Set initial values for tour if param.id is empty
            setTour({
                title: "",
                city: "",
                address: "",
                distance: "",
                price: "",
                maxGroupSize: "",
                desc: "",
                photo: "",
            });
        }
    },[param.id]);


    return(
       <>
       
  <Container className="form__table">
       <Table className="border border-5 mt-5">
     <Row>
            <Col>Enter Tour Name:</Col>
            <Col><input type="text"
                    value={tour.title}
                    onChange={(e) => {
                        setTour({ ...tour, title: e.target.value });
                      }}
            
            /></Col>
        </Row>

        <Row>
            <Col>Enter City:</Col>
            <Col><input type="text"
                value={tour.city}
                onChange={(e) => {
                    setTour({ ...tour, city: e.target.value });
                  }}
            /></Col>
        </Row>

        <Row>
            <Col>Tour Address:</Col>
            <Col><input type="text"
            value={tour.address}
            onChange={(e) => {
                setTour({ ...tour, address: e.target.value });
              }}
              /></Col>
        </Row>

        <Row>
            <Col>Enter Distance:</Col>
            <Col><input type="number"
            value={tour.distance}
            onChange={(e) => {
                setTour({ ...tour, distance: e.target.value });
              }}
              /></Col>
        </Row>

        <Row>
            <Col>Enter Price:</Col>
            <Col><input type="number"
            value={tour.price}
            onChange={(e) => {
                setTour({ ...tour, price: e.target.value });
              }}
              /></Col>
        </Row>

        <Row>
            <Col>Enter maxGroup:</Col>
            <Col><input type="number"
            value={tour.maxGroupSize}
            onChange={(e) => {
                setTour({ ...tour, maxGroupSize: e.target.value });
              }}/></Col>
        </Row>
        <Row>
            <Col>Enter Description:</Col>
            <Col><input type="text"
            value={tour.desc}
            onChange={(e) => {
                setTour({ ...tour, desc: e.target.value });
              }}/></Col>
        </Row>

        <Row>
            <Col>Img Url:</Col>
            <Col><input type="text"
            value={tour.photo}
            onChange={(e) => {
                setTour({ ...tour, photo: e.target.value });
              }}
            /></Col>
        </Row>
        
           <div className="text-center"> <button className="btn btn-primary"
           onClick={
            (e)=>{
                if(param.id !== "0"){
                    fetch("http://localhost:4000/api/v1/tours/"+param.id,
                    {
                    method:"PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(tour)
                    }
                    ).then((res) => navigate("/admin"));
                }else{
                    fetch("http://localhost:4000/api/v1/tours",{
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(tour)
                    }).then((res)=>navigate("/admin"));
                }
            }
           }
           
           >Submit</button></div>
        
     </Table>
       </Container> 
   


      
       </>
    );
}

export default Form;
