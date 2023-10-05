import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DashboardContainer from "../components/DashboardContainer";
import ContainerSidebarNavigationEven1 from "../components/ContainerSidebarNavigationEven1";
import Property1longName from "../components/Property1longName";
import Property1Sex from "../components/Property1Sex";
import DogInformationCard from "../components/DogInformationCard";
import SizeSmallSelectedYes from "../components/SizeSmallSelectedYes";
import Header from "../components/Header";
import "./RegistrationForMembers.css";

const RegistrationForMembers = () => {
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

  const onSidenavContainer5Click = useCallback(() => {
    navigate("/members");
  }, [navigate]);

  return (
    <div className="registration-for-members">
      <div className="body18">
        <DashboardContainer pageTitle="Dashboard" />
        <div className="body19">
          <ContainerSidebarNavigationEven1
            dimensionLabel="/group5.svg"
            onSidenavContainerClick={onSidenavContainerClick}
            onSidenavContainer1Click={onSidenavContainer1Click}
            onSidenavContainer2Click={onSidenavContainer2Click}
            onSidenavContainer3Click={onSidenavContainer3Click}
            onSidenavContainer5Click={onSidenavContainer5Click}
          />
          <div className="inside-body6">
            <div className="reg">
              <b className="title1">Registration</b>
              <div className="general-info">
                <b className="general-information">General Information</b>
              </div>
              <div className="inputfields-parent">
                <Property1longName
                  text="First Name"
                  text1="Placeholder"
                  showText={false}
                  property1longNamePosition="unset"
                  property1longNameTop="unset"
                  property1longNameLeft="unset"
                  property1longNameJustifyContent="flex-start"
                  property1longNameWidth="465px"
                  textWidth="122px"
                  textColor="#afafaf"
                  textFontFamily="Arapey"
                />
                <Property1longName
                  text="Last Name"
                  text1="Placeholder"
                  showText={false}
                  property1longNamePosition="unset"
                  property1longNameTop="unset"
                  property1longNameLeft="unset"
                  property1longNameJustifyContent="flex-start"
                  property1longNameWidth="465px"
                  textWidth="122px"
                  textColor="#afafaf"
                  textFontFamily="Arapey"
                />
                <Property1Sex
                  text="Sex"
                  showFrameDiv
                  property1SexWidth="465px"
                  property1SexPosition="unset"
                  property1SexTop="unset"
                  property1SexLeft="unset"
                />
                <Property1longName
                  text="Email"
                  text1="Placeholder"
                  showText={false}
                  property1longNamePosition="unset"
                  property1longNameTop="unset"
                  property1longNameLeft="unset"
                  property1longNameJustifyContent="flex-start"
                  property1longNameWidth="465px"
                  textWidth="122px"
                  textColor="#afafaf"
                  textFontFamily="Arapey"
                />
                <Property1longName
                  text="Phone"
                  text1="Placeholder"
                  showText={false}
                  property1longNamePosition="unset"
                  property1longNameTop="unset"
                  property1longNameLeft="unset"
                  property1longNameJustifyContent="flex-start"
                  property1longNameWidth="465px"
                  textWidth="122px"
                  textColor="#afafaf"
                  textFontFamily="Arapey"
                />
                <Property1longName
                  text="Username"
                  text1="Placeholder"
                  showText={false}
                  property1longNamePosition="unset"
                  property1longNameTop="unset"
                  property1longNameLeft="unset"
                  property1longNameJustifyContent="flex-start"
                  property1longNameWidth="465px"
                  textWidth="122px"
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
                  property1longNameWidth="465px"
                  textWidth="122px"
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
                  property1longNameJustifyContent="flex-start"
                  property1longNameWidth="465px"
                  textWidth="122px"
                  textColor="#afafaf"
                  textFontFamily="Arapey"
                />
              </div>
              <div className="general-info">
                <b className="general-information">Dog Information</b>
              </div>
              <DogInformationCard dogName1="Dog #1" />
              <DogInformationCard dogName1="Dog #2" />
              <div className="buttons">
                <SizeSmallSelectedYes
                  s="Register"
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
                  s="Add dog"
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <Header logoutLeft="0px" logoutWidth="1440px" buttonLeft="1288px" />
    </div>
  );
};

export default RegistrationForMembers;
