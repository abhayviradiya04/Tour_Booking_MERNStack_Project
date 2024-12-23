import Tour from '../models/Tour.js';
import Review from "../models/Review.js"


export const deleteReview = async (req, res) => {
    const id = req.params.id
    try {
        await Review.findByIdAndDelete(id);


        res.status(200).json({
            success: true,
            message: 'Successfully deleted',

        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: 'failed to delete',

        })

    }
};




export const getReviews = async (req, res) => {
    try {
        // Fetch all reviews from the database
        const reviews = await Review.find();

        res.status(200).json({
            success: true,
            message: "Reviews fetched successfully",
            data: reviews
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch reviews",
            error: err.message
        });
    }
};
export const createReview = async (req,res)=>{

    const tourId= req.params.tourId
    const newReview = new Review({...req.body})
    try {
        const savedReview = await newReview.save()

        //after creating a new review noe update the review array of the tour
        await Tour.findByIdAndUpdate(tourId,{
            $push:{reviews:savedReview._id},
        });

        res.status(200).json({
            success:true,
            message:"Review submitted",
            data:savedReview

        })
        
    } catch (err) {
       
        res.status(500).json({
            success:false,
            message:"failed to submitted",
            

        })
        
    }
}