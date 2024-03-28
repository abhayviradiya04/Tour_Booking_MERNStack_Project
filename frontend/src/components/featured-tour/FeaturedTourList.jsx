import React from "react";
import TourCard from "../../shared/TourCard";

import { Col } from "reactstrap";
import useFetch from './../../hooks/useFetch.js';
import { BASE_URL } from './../../utils/config.js'
import '../../style/featuredTourList.css'

const FeaturedTouList = () => {

    const { data: featuredTours, loading, error } = useFetch(`${BASE_URL}/tours/search/getFeaturedTours`)
    

    return (
        <>
            {
                loading && <div id="wifi-loader">
                <svg class="circle-outer" viewBox="0 0 86 86">
                    <circle class="back" cx="43" cy="43" r="40"></circle>
                    <circle class="front" cx="43" cy="43" r="40"></circle>
                    <circle class="new" cx="43" cy="43" r="40"></circle>
                </svg>
                <svg class="circle-middle" viewBox="0 0 60 60">
                    <circle class="back" cx="30" cy="30" r="27"></circle>
                    <circle class="front" cx="30" cy="30" r="27"></circle>
                </svg>
                <svg class="circle-inner" viewBox="0 0 34 34">
                    <circle class="back" cx="17" cy="17" r="14"></circle>
                    <circle class="front" cx="17" cy="17" r="14"></circle>
                </svg>
                <div class="text" data-text="Loading"></div>
            </div>
            }
            {
                error && <h4>{error}</h4>
            }



            {
                !loading && !error && featuredTours?.map(tour => (
                    <Col lg='3' className="mb-4" key={tour.id}>
                        <TourCard tour={tour} />
                    </Col>
                ))
            }
        </>
    )


}

export default FeaturedTouList;