import React from 'react';

const AppNotFound = props => {
  return (
    <div className="detail-tour">
      <div className="title-detail-tour">
        <legend>Tour is not found</legend>
      </div>
      <div className="img-detail-tour">
        <img src="../../assets/img/default-avt.png" alt="" />
      </div>
      <div className="description-detail-tour">
        <div className="description-detail">
          <div className="title-description-detail">
            <legend>Description</legend>
          </div>
          <div className="description-detail-zone">
            <fieldset>
              Not Found
                </fieldset>
          </div>
        </div>
      </div>
      <div className="description-detail-tour">
        <div className="description-detail">
          <div className="title-description-detail">
            <legend>Detail</legend>
          </div>
          <div className="description-detail-zone">
            <fieldset>
              Not Found
                </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
}


export default AppNotFound
