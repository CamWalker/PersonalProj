import React from 'react';

const SingleProfile = () => {

  return (
    <div className="profile-item">
      <div className="item-box">
        <div className="item-pic-container">
          <img className="item-pic" src="./gil-pic.JPG" />
        </div>
          <div className="item-content">
            <div className="item-name">GIL WALKER</div>
            <div className="specs">
              <div className="spec">
                <img className="spec-image" src="./gil-pic.JPG" />
                <span className="spec-text">Baby high school</span>
              </div>
              <div className="spec">
                <img className="spec-image" src="./gil-pic.JPG" />
                <span className="spec-text">Baby work</span>
              </div>
              <div className="spec">
                <img className="spec-image" src="./gil-pic.JPG" />
                <span className="spec-text">Salt Lake City, Utah</span>
              </div>
              <div className="spec">
                <img className="spec-image" src="./gil-pic.JPG" />
                <span className="spec-text">Single</span>
              </div>
            </div>
          </div>
      </div>
      <div className="ice-breaker-box">
        <div className="ice-breaker-item">
          <div className="ice-breaker-question">
            Favorite ice cream
          </div>
          <div className="ice-breaker-answer">
            Swirl- vanilla and chocolate chip
          </div>
        </div>
        <div className="ice-breaker-item">
          <div className="ice-breaker-question">
            First job
          </div>
          <div className="ice-breaker-answer">
            McDonald's
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProfile;
