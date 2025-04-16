import React, { useState } from "react";

const Review = ({ review }) => {
  const [idx, setIdx] = useState(0);

  const handlePrevBtn = () => {
    if (idx === 0) {
      alert("no prev");
      return;
    }
    setIdx(idx - 1);
  };

  const handleNextBtn = () => {
    if (idx === review.length - 1) {
      alert("no next");
      return;
    }
    setIdx(idx + 1);
  };

  const surpriseMe = () => {
    let randomIdx;
    do {
      randomIdx = Math.floor(Math.random() * review.length);
    } while (randomIdx === idx); // Avoid current index
    setIdx(randomIdx);
  };

  const { id, name, job, image, text } = review[idx];

  return (
    <div className="review">
      <p className="author" id={`author-${id}`}>{name}</p>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <img className="person-img" src={image} alt={name} />
      <div>
        <button className="prev-btn" onClick={handlePrevBtn}>previous</button>
        <button className="next-btn" onClick={handleNextBtn}>next</button>
        <button className="random-btn" onClick={surpriseMe}>surprise me</button>
      </div>
    </div>
  );
};

export default Review;
