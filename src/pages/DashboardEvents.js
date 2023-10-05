import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DashboardContainer from "../components/DashboardContainer";
import FormContainer1 from "../components/FormContainer1";
import Container113 from "../components/Container113";
import Header from "../components/Header";
import "./DashboardEvents.css";

const DashboardEvents = () => {
  const navigate = useNavigate();

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

  const onGroupContainer1Click = useCallback(() => {
    navigate("/pet-blessingssee-more");
  }, [navigate]);

  return (
    <div className="dashboard-events">
      <div className="body">
        <DashboardContainer
          pageTitle="Dashboard"
          dashboardIconVector22Gap="485px"
          dashboardWidth="639px"
          propWidth="unset"
          propHeight="unset"
        />
        <div className="body1">
          <FormContainer1
            dimensions="/group.svg"
            propCursor="pointer"
            propCursor1="pointer"
            propCursor2="pointer"
            onSidenavContainer1Click={onSidenavContainer1Click}
            onSidenavContainer2Click={onSidenavContainer2Click}
            onSidenavContainer3Click={onSidenavContainer3Click}
            onSidenavContainer4Click={onSidenavContainer4Click}
            onSidenavContainer5Click={onSidenavContainer5Click}
          />
          <Container113 />
        </div>
      </div>
      <Header logoutLeft="0px" logoutWidth="1440px" buttonLeft="1288px" />
    </div>
  );
};

export default DashboardEvents;
