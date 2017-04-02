import React from 'react';

const SelectedProfile = () => {
  return (
    <div className="selected-profile-box">
      <div className="selected-profile-container">
        <div className="selected-profile-item">

          <div className="selected-profile-pic-container">
            <img className="selected-profile-pic" src="./gil-pic.JPG" alt="" />
          </div>

          <div className="selected-profile-name-specs">
            <div className="selected-profile-name">GIL WALKER 1</div>

            <div className="selected-profile-specs">
              <div className="selected-profile-spec">
                <img className="selected-profile-spec-image" src="./gil-pic.JPG" />
                <span className="selected-profile-spec-text">Baby high school. What happends asdfkjalejlqwerl;klkda;lsdflkqwerlkqjwelm doa ewr  fpsodf we</span>
              </div>
              <div className="selected-profile-spec">
                <img className="selected-profile-spec-image" src="./gil-pic.JPG" />
                <span className="selected-profile-spec-text">Baby work</span>
              </div>
              <div className="selected-profile-spec">
                <img className="selected-profile-spec-image" src="./gil-pic.JPG" />
                <span className="selected-profile-spec-text">Salt Lake City, Utah</span>
              </div>
              <div className="selected-profile-spec">
                <img className="selected-profile-spec-image" src="./gil-pic.JPG" />
                <span className="selected-profile-spec-text">Single</span>
              </div>
            </div>
          </div>



          <div className="selected-profile-ice-breaker-box">
            <div className="selected-profile-ice-breaker-item">
              <div className="selected-profile-ice-breaker-question">
                Favorite ice cream
              </div>
              <div className="selected-profile-ice-breaker-answer">
                Swirl- vanilla and chocolate chip
              </div>
            </div>
            <div className="selected-profile-ice-breaker-item">
              <div className="selected-profile-ice-breaker-question">
                First job
              </div>
              <div className="selected-profile-ice-breaker-answer">
                McDonald's
              </div>
            </div>
            <div className="selected-profile-ice-breaker-item">
              <div className="selected-profile-ice-breaker-question">
                Another
              </div>
              <div className="selected-profile-ice-breaker-answer">
                Another answer
              </div>
            </div>
            <div className="selected-profile-ice-breaker-item">
              <div className="selected-profile-ice-breaker-question">
                And Another
              </div>
              <div className="selected-profile-ice-breaker-answer">
                And another answer
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedProfile;
