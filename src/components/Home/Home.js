import { useNavigate } from "react-router-dom";
import useReview from "../../Hooks/useReviews";
import Review from "../Review/Review";
import "./Home.css";

//home component
const Home = () => {
  // custom hook
  const [reviews, setReviews] = useReview();

  // navigate all review
  const navigate = useNavigate();

  const handleForReview = () => {
    navigate("/reviews");
  };

  return (
    <div>
      {/* home page - description */}
      <div className="home">
        <div>
          <h1>
            Choose The Best{" "}
            <span id="name">
              ...FASHION HOUSE <i> Suit</i>...
            </span>
            <br />
            Stay Elegant !!!
          </h1>
          <p>
            Live your own life with joy. Choose your own style. Look forword.
            Stay confident and colorful. Select our fashion suit products and
            stay elegent.{" "}
          </p>
        </div>
        <img src={process.env.PUBLIC_URL + "/suite.png"} alt="" />
      </div>
      {/* home page - reviews */}
      <div className="reviews">
        <h1>
          <span id="name">Top Reviews ({reviews.slice(0, 3).length})</span>
        </h1>
        <div className="review-container">
          {reviews.slice(0, 3).map((review) => (
            <Review review={review} key={review.id}></Review>
          ))}
        </div>

        <button className="btn-all-reviews" onClick={handleForReview}>
          See All Reviews
        </button>
      </div>
    </div>
  );
};

export default Home;
