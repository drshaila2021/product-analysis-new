import React from "react";
import useReview from "../../Hooks/useReviews";

const Reviews = () => {
  //review page
  const [reviews, setReviews] = useReview();
  return (
    <div className="reviews">
      <h3> Customer Reviews..</h3>
      <div className="review-container">
        {reviews.map((review) => (
          <div>
            <h3>Name: {review.name}</h3>
            <p>{review.post}</p>
            <p>
              <small>Rating: {review.rating} </small>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
