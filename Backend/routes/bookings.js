import express from 'express';


import { createBooking, getAllBooking, getBooking } from '../contollers/bookingController.js';
import { verifyUser } from '../utils/verifyToken.js';

const router =express.Router();


router.post('/',createBooking)
router.get('/:id',getBooking)
router.get('/',getAllBooking)

export default router;