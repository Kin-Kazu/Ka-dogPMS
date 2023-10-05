import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import EventListContainer from "./EventListContainer";
import "./Container113.css";

const Container113 = () => {
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate("/pet-blessingssee-more");
  }, [navigate]);

  return (
    <div className="inside-body8">
      <div className="summary-wrapper">
        <b className="summary">Summary</b>
      </div>
      <div className="dashboard-something">
        <div className="total-participants">
          <div className="summary">Total Participants</div>
          <b className="b2">113</b>
        </div>
        <div className="total-participants">
          <div className="summary">Total Members</div>
          <b className="b2">300</b>
        </div>
        <div className="total-participants">
          <div className="summary">Total Vaccination</div>
          <b className="b2">10</b>
        </div>
      </div>
      <div className="summary-wrapper">
        <b className="summary">Events List</b>
      </div>
      <EventListContainer
        eventTitle="Fashion Show"
        ratingPercentage="41/100"
        onGroupContainer1Click={onGroupContainer1Click}
      />
      <EventListContainer
        eventTitle="Parade"
        ratingPercentage="82/100"
        propCursor="unset"
      />
      <EventListContainer
        eventTitle="Fun Match"
        ratingPercentage="32/100"
        propCursor="unset"
      />
      <div className="pet-blessings">
        <img className="group-icon4" alt="" src="/group1.svg" />
        <div className="pet-blessings-parent">
          <b className="pet-blessings1">Pet Blessings</b>
          <div className="participants9">Participants:</div>
          <b className="b5">71/100</b>
        </div>
        <div className="vector-container">
          <img className="vector-icon6" alt="" src="/vector.svg" />
          <img className="vector-icon7" alt="" src="/vector1.svg" />
          <div className="see-more1">See More</div>
        </div>
      </div>
    </div>
  );
};

export default Container113;
