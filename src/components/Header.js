import { useMemo } from "react";
import SizeSmallSelectedYes from "./SizeSmallSelectedYes";
import "./Header.css";

const Header = ({ logoutLeft, logoutWidth, buttonLeft }) => {
  const headerStyle = useMemo(() => {
    return {
      left: logoutLeft,
      width: logoutWidth,
    };
  }, [logoutLeft, logoutWidth]);

  const logoutStyle = useMemo(() => {
    return {
      left: buttonLeft,
    };
  }, [buttonLeft]);

  return (
    <div className="header" style={headerStyle}>
      <div className="logout" style={logoutStyle}>
        <SizeSmallSelectedYes
          s="Logout"
          sizeSmallSelectedYesBorderRadius="20px"
          sizeSmallSelectedYesBackgroundColor="#0386d0"
          sizeSmallSelectedYesWidth="115px"
          sizeSmallSelectedYesPosition="absolute"
          sizeSmallSelectedYesTop="0px"
          sizeSmallSelectedYesLeft="0px"
          sizeSmallSelectedYesHeight="unset"
          sizeSmallSelectedYesPadding="var(--padding-3xs) var(--padding-5xs) var(--padding-3xs) var(--padding-22xl)"
          sizeSmallSelectedYesBoxSizing="border-box"
          sizeSmallSelectedYesCursor="unset"
          sizeSmallSelectedYesBorder="unset"
          sColor="#fff"
          sFontWeight="unset"
        />
        <img
          className="logout-removebg-preview-1-icon"
          alt=""
          src="/logoutremovebgpreview-1@2x.png"
        />
      </div>
      <div className="welcome-admin">Welcome, Admin!</div>
    </div>
  );
};

export default Header;
