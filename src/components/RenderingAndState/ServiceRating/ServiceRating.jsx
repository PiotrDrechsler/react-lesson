import React from "react";

function ServiceRating() {
  const handleRatingClick = (score) => {
    if (score === 5) {
      alert("Thank you very much! :)");
    } else if (score > 2) {
      alert("Thank you!");
    } else {
      alert("Sorry :(");
    }
  };

  const renderButton = (score) => (
    <button key={score} onClick={() => handleRatingClick(score)}>
      {score}
    </button>
  );

  return (
    <div>
      <h1>Rate our Service:</h1>
      {[1, 2, 3, 4, 5].map(renderButton)}
    </div>
  );
}

export default ServiceRating;
