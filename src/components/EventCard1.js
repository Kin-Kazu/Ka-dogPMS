import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ContainerSidebarNavigation from "./ContainerSidebarNavigation";
import JudgeDetailsContainer from "./JudgeDetailsContainer";
import SizeSmallSelectedYes from "./SizeSmallSelectedYes";
import "./EventCard1.css";

const EventCard1 = () => {
  const navigate = useNavigate();

  const onSidenavContainerClick = useCallback(() => {
    navigate("/dashboard-events");
  }, [navigate]);

  const onSidenavContainer1Click = useCallback(() => {
    navigate("/dashboard-participants");
  }, [navigate]);

  const onSidenavContainer2Click = useCallback(() => {
    navigate("/vaccination");
  }, [navigate]);

  const onSidenavContainer3Click = useCallback(() => {
    navigate("/schedule");
  }, [navigate]);

  const onSidenavContainer4Click = useCallback(() => {
    navigate("/judging");
  }, [navigate]);

  const onSidenavContainer5Click = useCallback(() => {
    navigate("/members");
  }, [navigate]);

  return (
    <div className="body26">
      <ContainerSidebarNavigation
        dimensionCode="/group6.svg"
        onSidenavContainerClick={onSidenavContainerClick}
        onSidenavContainer1Click={onSidenavContainer1Click}
        onSidenavContainer2Click={onSidenavContainer2Click}
        onSidenavContainer3Click={onSidenavContainer3Click}
        onSidenavContainer4Click={onSidenavContainer4Click}
        onSidenavContainer5Click={onSidenavContainer5Click}
      />
      <div className="inside-body11">
        <JudgeDetailsContainer
          dimensionCode="/group7.svg"
          personName="Akame L. Sin"
          judgeNumber="Judge #1"
        />
        <div className="judge-details1">
          <img className="group-icon6" alt="" src="/group8.svg" />
          <div className="name-container">
            <div className="name3">
              <div className="wanwan-u-ling-wrapper">
                <b className="wanwan-u-ling">Wanwan U. Ling</b>
              </div>
              <div className="judge-2">Judge #2</div>
              <div className="minus-removebg-preview-2" />
            </div>
            <div className="details1">
              <div className="contact-number2">
                <ul className="contact-number3">Contact Number:</ul>
              </div>
              <div className="email2">
                <ul className="contact-number3">{`Email: `}</ul>
              </div>
              <SizeSmallSelectedYes
                s="Delete"
                sizeSmallSelectedYesBorderRadius="20px"
                sizeSmallSelectedYesBackgroundColor="#a85a5a"
                sizeSmallSelectedYesWidth="79px"
                sizeSmallSelectedYesPosition="absolute"
                sizeSmallSelectedYesTop="14px"
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
        <JudgeDetailsContainer
          dimensionCode="/group8.svg"
          personName="Sum G. Bak"
          judgeNumber="Judge #3"
          propTop="343px"
          propTop1="14px"
        />
        <JudgeDetailsContainer
          dimensionCode="/group7.svg"
          personName="Jim M. Raekwan"
          judgeNumber="Judge #4"
          propTop="504px"
          propTop1="7px"
        />
        <img
          className="addbtn-removebg-preview-3-icon4"
          alt=""
          src="/addbtnremovebgpreview-32@2x.png"
        />
      </div>
    </div>
  );
};

export default EventCard1;
