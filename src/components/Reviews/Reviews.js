import React from 'react';
import useReview from '../../Hooks/useReview';

const Reviews = () => {
   const[reviews,setReviews]=useReview([]);
    return (
        <div className='reviews'>
            <h3>There Are All Reviews..</h3>
            <div className="review-container">
            {reviews.map(review=> <div>
            <h3>name:{review.name}</h3>
            <p>{review.post}</p>
            <p><small>Rating:  {review.rating} </small></p>

            </div>)}
            </div>
        </div>
    );
};

export default Reviews;