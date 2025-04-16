import React, { useState } from "react";

const Review = ({ review }) => {
  const [idx, setIdx] = React.useState(0);

  function handlePrevBtn(){
    if(idx===0){
        return
    }
    setIdx(idx-1)
  }
  
  function handleNextBtn(){
    if(idx===review.length-1){
        return
    }
    setIdx(idx+1)
  }

  function surpriseMe(){
    let randomIdx  = Math.floor(Math.random() * review.length)
    setIdx(randomIdx)
  }

  const currentReview = review[idx];

  return (
    <div className="review">
        <p className="author" id={`author-${currentReview.id}`}>{currentReview.name}</p>
        <p className="job">{currentReview.job}</p>
        <p className="info">{currentReview.text}</p>
        <img className="person-img" src={currentReview.image} alt={currentReview.name} />
      <div>
      <button className="prev-btn" onClick={handlePrevBtn}>previous</button>
      <button className="next-btn" onClick={handleNextBtn}>next</button>
      <button className="random-btn" onClick={surpriseMe}>surprise me</button>
      </div>
    </div>
  );
};

export default Review;
