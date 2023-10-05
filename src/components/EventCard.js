import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ContainerSidebarNavigation from "./ContainerSidebarNavigation";
import Property1longName from "./Property1longName";
import SizeSmallSelectedYes from "./SizeSmallSelectedYes";
import "./EventCard.css";

const EventCard = () => {
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
    <div className="body27">
      <ContainerSidebarNavigation
        dimensionCode="/group5.svg"
        onSidenavContainerClick={onSidenavContainerClick}
        onSidenavContainer1Click={onSidenavContainer1Click}
        onSidenavContainer2Click={onSidenavContainer2Click}
        onSidenavContainer3Click={onSidenavContainer3Click}
        onSidenavContainer4Click={onSidenavContainer4Click}
        onSidenavContainer5Click={onSidenavContainer5Click}
      />
      <div className="inside-body12">
        <div className="judging4">
          <b className="title10">Create Account for Judge</b>
          <div className="div77">
            <Property1longName
              text="Name"
              text1="Placeholder"
              showText={false}
              property1longNamePosition="unset"
              property1longNameTop="unset"
              property1longNameLeft="unset"
              property1longNameJustifyContent="flex-start"
              property1longNameWidth="unset"
              textWidth="72px"
              textColor="#afafaf"
              textFontFamily="Arapey"
            />
            <Property1longName
              text="Contact #"
              text1="Placeholder"
              showText={false}
              property1longNamePosition="unset"
              property1longNameTop="unset"
              property1longNameLeft="unset"
              property1longNameJustifyContent="flex-start"
              property1longNameWidth="unset"
              textWidth="72px"
              textColor="#afafaf"
              textFontFamily="Arapey"
            />
            <Property1longName
              text="Email"
              text1="Placeholder"
              showText={false}
              property1longNamePosition="unset"
              property1longNameTop="unset"
              property1longNameLeft="unset"
              property1longNameJustifyContent="flex-start"
              property1longNameWidth="unset"
              textWidth="72px"
              textColor="#afafaf"
              textFontFamily="Arapey"
            />
          </div>
          <div className="div78">
            <Property1longName
              text="Username"
              text1="Placeholder"
              showText={false}
              property1longNamePosition="unset"
              property1longNameTop="unset"
              property1longNameLeft="unset"
              property1longNameJustifyContent="flex-start"
              property1longNameWidth="unset"
              textWidth="72px"
              textColor="#afafaf"
              textFontFamily="Arapey"
            />
            <Property1longName
              text="Password"
              text1="Placeholder"
              showText={false}
              property1longNamePosition="unset"
              property1longNameTop="unset"
              property1longNameLeft="unset"
              property1longNameJustifyContent="flex-start"
              property1longNameWidth="unset"
              textWidth="72px"
              textColor="#afafaf"
              textFontFamily="Arapey"
            />
            <Property1longName
              text="Confirm Password"
              text1="Placeholder"
              showText={false}
              property1longNamePosition="unset"
              property1longNameTop="unset"
              property1longNameLeft="unset"
              property1longNameJustifyContent="center"
              property1longNameWidth="unset"
              textWidth="72px"
              textColor="#afafaf"
              textFontFamily="Arapey"
            />
          </div>
          <div className="buttons3">
            <SizeSmallSelectedYes
              s="Confirm"
              sizeSmallSelectedYesBorderRadius="20px"
              sizeSmallSelectedYesBackgroundColor="#0386d0"
              sizeSmallSelectedYesWidth="115px"
              sizeSmallSelectedYesPosition="unset"
              sizeSmallSelectedYesTop="unset"
              sizeSmallSelectedYesLeft="unset"
              sizeSmallSelectedYesHeight="unset"
              sizeSmallSelectedYesPadding="var(--padding-3xs) var(--padding-21xl)"
              sizeSmallSelectedYesBoxSizing="border-box"
              sizeSmallSelectedYesCursor="unset"
              sizeSmallSelectedYesBorder="unset"
              sColor="#fff"
              sFontWeight="unset"
            />
            <SizeSmallSelectedYes
              s="Cancel"
              sizeSmallSelectedYesBorderRadius="20px"
              sizeSmallSelectedYesBackgroundColor="#a85a5a"
              sizeSmallSelectedYesWidth="115px"
              sizeSmallSelectedYesPosition="unset"
              sizeSmallSelectedYesTop="unset"
              sizeSmallSelectedYesLeft="unset"
              sizeSmallSelectedYesHeight="unset"
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
    </div>
  );
};

export default EventCard;
