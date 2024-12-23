import React from "react"
import {Routes,Route,Navigate} from 'react-router-dom'
import Home from './../pages/Home'
import Tours from "./../pages/Tour";
import TourDetails from './../pages/TourDetails'
import Login from "./../pages/Login";
import Register from './../pages/Register'
import SearchResultList from "./../pages/SearchResultList";
import ThankYou from "../pages/ThankYou";
import About from "../pages/About";
import AdminPanel from "../pages/AdminPanel";
import BookingTour from "../pages/BookingTour";
import AdminTours from "../pages/AdminTours";
import AdminBookingTours from "../pages/AdminBookingTours";
import Form from "../pages/TourAddForm";
import MesonryImagesGallery from "../components/Image-gallery/MesonryImagesGallery";
import AdminReview from "../pages/AdminReview";
const Routers =()=> {
    return(
     <Routes>
        <Route path="/" element={<Navigate to='/home'/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/admin" element={<AdminPanel/>}>
        <Route index element={<AdminTours/>}/>
        <Route path="/admin/adminBooking" element={<AdminBookingTours/>}/>
        <Route path="/admin/review" element={<AdminReview/>}/>
        </Route>
        {/* <Route path="/showbooking" element={<AdminBookingTours/>}/> */}
        <Route path="/bookingtour" element={<BookingTour/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/tours" element={<Tours/>}/>
        <Route path="/tours/:id" element={<TourDetails/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/gallery" element={<MesonryImagesGallery   />}/>
        <Route path="/addtour" element={<Form/>}/>
        <Route path="/addtour/:id" element={<Form/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/thank-you" element={<ThankYou/>}/>
        <Route path="/tours/search/getTourBySearch" element={<SearchResultList/>}/>
     </Routes>

    )
}

export default Routers;