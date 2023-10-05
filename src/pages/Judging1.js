import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DashboardContainer from "../components/DashboardContainer";
import EventCard1 from "../components/EventCard1";
import Header from "../components/Header";
import "./Judging1.css";

const Judging1 = () => {
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
    <div className="judging1">
      <div className="body12">
        <DashboardContainer
          pageTitle="Manage Judging"
          dashboardIconVector22Gap="326px"
          dashboardWidth="836px"
          propWidth="unset"
          propHeight="unset"
        />
        <EventCard1 />
      </div>
      <Header logoutLeft="0px" logoutWidth="1440px" buttonLeft="1288px" />
    </div>
  );
};

export default Judging1;
