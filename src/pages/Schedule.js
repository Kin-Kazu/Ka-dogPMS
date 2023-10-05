import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import DashboardContainer from "../components/DashboardContainer";
import ContainerSidebarNavigationEven from "../components/ContainerSidebarNavigationEven";
import AddEventFormContainer from "../components/AddEventFormContainer";
import "./Schedule.css";

const Schedule = () => {
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
    <div className="schedule">
      <Header logoutLeft="0px" logoutWidth="1440px" buttonLeft="1288px" />
      <div className="body4">
        <DashboardContainer
          pageTitle="Schedule"
          dashboardIconVector22Gap="306px"
          dashboardWidth="824px"
          propWidth="559px"
          propHeight="85px"
        />
        <div className="body5">
          <ContainerSidebarNavigationEven
            dimensionLabel="/group3.svg"
            propPosition="unset"
            propTop="unset"
            propLeft="unset"
            propFlexShrink="0"
            propWidth="265px"
            propCursor="pointer"
            propCursor1="pointer"
            propCursor2="pointer"
            propWidth1="259px"
            propCursor3="pointer"
            propCursor4="pointer"
            propCursor5="pointer"
            onSidenavContainerClick={onSidenavContainerClick}
            onSidenavContainer1Click={onSidenavContainer1Click}
            onSidenavContainer2Click={onSidenavContainer2Click}
            onSidenavContainer3Click={onSidenavContainer3Click}
            onSidenavContainer4Click={onSidenavContainer4Click}
            onSidenavContainer5Click={onSidenavContainer5Click}
          />
          <AddEventFormContainer />
        </div>
      </div>
    </div>
  );
};

export default Schedule;
