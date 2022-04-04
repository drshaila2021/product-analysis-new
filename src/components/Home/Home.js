// import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useReview from '../../Hooks/useReview';
import picture from '../../suite.jpg';
import Review from '../Review/Review';
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
       <div>
       <h1>Choose The Best....<br>
         </br>
         Stay Elegance!!!!
          </h1>
          <p>Live your own life with joy. Choose your own style. Look forword. Stay confident and colorfull.....</p>
       </div>
          <img src={picture} alt="" srcset="" />
         </div>
           <div className='reviews'>
                <h1>Reviews ({reviews.slice(0,3).length}) </h1>
           <div className="review-container">
         
            {
              reviews.slice(0,3).map(review=><Review 
              review={review}
              ></Review>)
            }
            </div>
            <div className='review-btn'>
                <button  onClick={handleForReview}>CHECK ALL REVIEWS</button>
            </div>
       </div>
           
       

        </div>
        );
}

export default Home;