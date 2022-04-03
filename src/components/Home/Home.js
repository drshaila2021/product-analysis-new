// import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useReview from '../../Hooks/useReview';
import picture from '../../suite.jpg';
// import Reviews from '../Reviews/Reviews';
import './Home.css'

const Home = () => {
    const[reviews,setReviews]=useReview([]);
    const navigate=useNavigate();
    const handleForReview=()=>{
       navigate('/reviews')
    }

    return (
        <div>
        
        <div className="home"> 
        <h1>Choose The Best....<br>
         </br>
         Stay Elegance!!!!
          </h1>
          <img src={picture} alt="" srcset="" />
         </div>
           <div className='reviews'>
                <h1>Reviews ({reviews.slice(0,3).length}) </h1>
           <div className="review-container">
         {reviews.slice(0,3).map(review=> <div>
            <h3>name:{review.name}</h3>
            <p>{review.post}</p>
            <p><small>Rating:  {review.rating} </small></p>

            </div>)}
            </div>
            <div className='review-btn'>
                <button  onClick={handleForReview}>CHECK ALL REVIEWS</button>
            </div>
       </div>
           
       

        </div>
        );
}

export default Home;