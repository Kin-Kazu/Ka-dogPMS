import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DashboardContainer from "../components/DashboardContainer";
import EventCard from "../components/EventCard";
import Header from "../components/Header";
import "./Judging.css";

const Judging = () => {
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
    <div className="judging2">
      <div className="body17">
        <DashboardContainer
          pageTitle="Judging"
          dashboardIconVector22Gap="563px"
          dashboardWidth="545px"
          propWidth="unset"
          propHeight="unset"
        />
        <EventCard />
      </div>
      <Header logoutLeft="0px" logoutWidth="1440px" buttonLeft="1288px" />
    </div>
  );
};

export default Judging;
