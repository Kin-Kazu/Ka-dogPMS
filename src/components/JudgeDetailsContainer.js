import { useMemo } from "react";
import SizeSmallSelectedYes from "./SizeSmallSelectedYes";
import "./JudgeDetailsContainer.css";

const JudgeDetailsContainer = ({
  dimensionCode,
  personName,
  judgeNumber,
  propTop,
  propTop1,
}) => {
  const judgeDetailsStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const sizeSmallSelectedYesStyle = useMemo(() => {
    return {
      top: propTop1,
    };
  }, [propTop1]);

  return (
    <div className="judge-details" style={judgeDetailsStyle}>
      <img className="group-icon5" alt="" src={dimensionCode} />
      <div className="main-details">
        <div className="name2">
          <div className="akame-l-sin-wrapper">
            <b className="akame-l-sin">{personName}</b>
          </div>
          <div className="judge-1">{judgeNumber}</div>
        </div>
        <div className="details">
          <div className="contact-number">
            <ul className="contact-number1">Contact Number:</ul>
          </div>
          <div className="email">
            <ul className="contact-number1">{`Email: `}</ul>
          </div>
          <SizeSmallSelectedYes
            s="Delete"
            sizeSmallSelectedYesBorderRadius="20px"
            sizeSmallSelectedYesBackgroundColor="#a85a5a"
            sizeSmallSelectedYesWidth="79px"
            sizeSmallSelectedYesPosition="absolute"
            sizeSmallSelectedYesTop="10px"
            sizeSmallSelectedYesLeft="631.01px"
            sizeSmallSelectedYesHeight="27px"
            sizeSmallSelectedYesPadding="var(--padding-3xs) var(--padding-21xl)"
            sizeSmallSelectedYesBoxSizing="border-box"
            sizeSmallSelectedYesCursor="unset"
            sizeSmallSelectedYesBorder="unset"
            sColor="#fff"
            sFontWeight="unset"
          />
        </div>
      </div>
    </div>
  );
};

export default JudgeDetailsContainer;
