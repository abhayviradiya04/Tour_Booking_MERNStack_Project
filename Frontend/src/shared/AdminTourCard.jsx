import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, Col, Row } from "reactstrap";

import "./admin-tour-card.css";
import calculateAvgRating from "../utils/avgRating";

const AdminTourCard = ({ tour, id }) => {
    const [dtour, setdTour] = useState({});

    useEffect(() => {
        fetch(`http://localhost:4000/api/v1/tours/${id}`)
            .then((res) => res.json())
            .then((res) => setdTour(res));
    }, [id]);

    const { _id, title, city, photo, price, featured, reviews } = tour;
    const { totalRating, avgRating } = calculateAvgRating(reviews);

    return (
        <div className="tour__card">
            <Card>
                <div className="tour__img">
                    <img src={photo} alt="tour-img" className="card-img-top" />
                    {featured && <span>Featured</span>}
                </div>
            </Card>

            <CardBody>
                <div className="card__top d-flex align-items-center justify-content-between">
                    <span className="tour__location d-flex align-items-center gap-1">
                        <i className="ri-map-pin-line"></i>
                        {city}
                    </span>
                    <span className="tour__rating d-flex align-items-center gap-1">
                        <i className="ri-star-fill"></i>
                        {avgRating === 0 ? null : avgRating}
                        {totalRating === 0 ? 'Not Rated' : (<span>({reviews.length})</span>)}
                    </span>
                </div>

                <h5 className="tour__title">
                    <Link to={`/tours/${_id}`}>{title}</Link>
                </h5>

                <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
                    <h5>${price}<span> /per person/</span></h5>
                </div>

                <div>
                    <Row className="mt-3">
                        <Col>
                            <Link to={`/addtour/${_id}`} className="btn booking__btn1 ms-5 link-light">Update</Link>
                        </Col>
                        <Col>
                            <Button className="btn booking__btn1" onClick={() => {
                                fetch(`http://localhost:4000/api/v1/tours/${_id}`, {
                                    method: "DELETE"
                                }).then((res) => {
                                    if (res.ok) {
                                        window.location.reload();
                                    } else {
                                        console.error("Failed to delete tour");
                                    }
                                })
                            }}>Delete</Button>
                        </Col>
                    </Row>
                </div>
            </CardBody>
        </div>
    )
}

export default AdminTourCard;
