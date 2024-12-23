import express from 'express';
import { createReview, deleteReview, getReviews } from '../contollers/reviewController.js';
import { verifyUser } from '../utils/verifyToken.js';


const router =express.Router();


router.post('/:tourId',createReview)
router.get('/',getReviews)
router.delete('/:id',deleteReview)

export default router;