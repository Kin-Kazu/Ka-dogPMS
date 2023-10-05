import { useMemo } from "react";
import "./EventListContainer.css";

const EventListContainer = ({
  eventTitle,
  ratingPercentage,
  propCursor,
  onGroupContainer1Click,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  return (
    <div className="fashion-show1">
      <img className="group-icon3" alt="" src="/group1.svg" />
      <div className="fashion-show-parent">
        <b className="fashion-show2">{eventTitle}</b>
        <div className="participants8">Participants:</div>
        <b className="b1">{ratingPercentage}</b>
      </div>
      <div
        className="vector-group"
        onClick={onGroupContainer1Click}
        style={groupDivStyle}
      >
        <img className="vector-icon4" alt="" src="/vector.svg" />
        <img className="vector-icon5" alt="" src="/vector1.svg" />
        <div className="see-more">See More</div>
      </div>
    </div>
  );
};

export default EventListContainer;
