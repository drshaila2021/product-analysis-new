import React from "react";
import useReview from "../../Hooks/useReviews";
import Review from "../Review/Review";

const Reviews = () => {
  //review page
  const [reviews, setReviews] = useReview();
  return (
    <div className="reviews">
      <h3> Customer Reviews..</h3>
      <div className="review-container">
        {reviews.map((review) => (
          <Review review={review} key={review.id}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
