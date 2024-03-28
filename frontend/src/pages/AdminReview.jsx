import React, { useState, useEffect } from "react";

export default function AdminReview() {
    const [reviews, setReviews] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:4000/api/v1/review")
            .then((res) => res.json())
            .then((res) => {
                console.warn(res.data);
                setReviews(res.data);
            })
    }, []);

    // Function to handle deletion of a review
    const handleDeleteReview = async (reviewId) => {
        try {
            const res = await fetch(`http://localhost:4000/api/v1/review/${reviewId}`, {
                method: 'DELETE'
            });
            if (!res.ok) {
                throw new Error('Failed to delete review');
            }
            // Filter out the deleted review from the reviews array
            setReviews(reviews.filter(review => review._id !== reviewId));
        } catch (error) {
            console.error(error.message);
        }
    };

    // Check if reviews array is empty or undefined before rendering
    if (!reviews || reviews.length === 0) {
        return <div>No reviews available</div>;
    }

    const reviewCards = reviews.map((review) => {
        return (
            <div key={review._id} className="card text-center mt-5">
                <div className="card-header fw-bold "style={{color:"#fff",background:"#9400FF"}}>
                    {review.username}
                </div>
                <div className="card-body">
                    <h5 className="card-title">Review: {review.reviewText}</h5>
                
                    {/* Delete button */}
                    <button className="btn btn-danger" onClick={() => handleDeleteReview(review._id)}>Delete</button>
                </div>
            </div>
        );
    });

    return (
        <div>
            {reviewCards}
        </div>
    );
}
