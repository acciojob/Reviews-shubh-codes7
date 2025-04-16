import React, { useState } from "react";

const Review = ({ review }) => {
  console.log(review);
  const [idx, setIdx] = React.useState(0);

  function handlePrevBtn(){
    if(idx===0){
        alert("no prev")
        return
    }
    setIdx(idx-1)
  }
  
  function handleNextBtn(){
    if(idx===review.length-1){
        alert("no next")
        return
    }
    setIdx(idx+1)
  }

  function surpriseMe(){
    let idx = Math.floor(Math.random() * 4)
    setIdx(idx)
  }

  return (
    <div className="review">
        <p className="author">{review[idx].name}</p>
        <p className="job">{review[idx].job}</p>
        <p className="info">{review[idx].text}</p>
        <img className="person-img" src={review[idx].image}></img>
      <div>
      <button className="prev-btn" onClick={handlePrevBtn}>previous</button>
      <button className="next-btn" onClick={handleNextBtn}>next</button>
      <button className="random-btn" onClick={surpriseMe}>surprise me</button>
      </div>
    </div>
  );
};

export default Review;
