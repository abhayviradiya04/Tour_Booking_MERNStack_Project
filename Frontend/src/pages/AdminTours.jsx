import React, { useState, useEffect } from "react"

import '../style/tour.css';


import AdminTourCard from './../shared/AdminTourCard.jsx';
import { Container, Row, Col } from "reactstrap";
import useFetch from '../hooks/useFetch.js'
import { BASE_URL } from '../utils/config.js'


const AdminTours = () => {

    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const {data:tours,loading,error} =useFetch(`${BASE_URL}/tours?page=${page}`)
    const{data:tourCount} = useFetch(`${BASE_URL}/tours/search/getTourCount`)

    useEffect(() => {
        const pages = Math.ceil(tourCount / 8);
        setPageCount(pages);
        window.scrollTo(0,0);
    }, [page,tourCount,tours])


    return (
        <>
          
            {/* <section>
                <Container>
                    <Row>
                        <SearchBar />
                    </Row>
                </Container>
            </section> */}

            <section className="pt-0 mt-5">
                <Container>
                    {loading && <h4 cla5ssName="text-center pt-5"><div id="wifi-loader">
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
            </div></h4>}
                    {error && <h4 cla5ssName="text-center pt-5">{error}</h4>}
                    {
                        !loading && !error && <Row>
                        {
                            tours?.map(tour => (
                                <Col lg='3' className="mb-4" key={tour._id}><AdminTourCard tour={tour} />
                                </Col>
                            ))
                        }

                        <Col lg="12">
                            <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                                {[...Array(pageCount).keys()].map(number => (
                                    <span key={number} onClick={() => setPage(number)}

                                        className={page === number ? "active__page" : ""}
                                        >
                                        {number + 1}
                                    </span>
                                ))}

                            </div>
                        </Col>
                    </Row>
                    }
                </Container>
            </section>
            



        </>
    )
}

export default AdminTours;