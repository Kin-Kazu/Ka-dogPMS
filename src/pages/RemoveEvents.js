import Header from "../components/Header";
import FestivalCard from "../components/FestivalCard";
import ContainerSidebarNavigationEven from "../components/ContainerSidebarNavigationEven";
import "./RemoveEvents.css";

const RemoveEvents = () => {
  return (
    <div className="remove-events">
      <Header logoutLeft="0px" logoutWidth="1440px" buttonLeft="1288px" />
      <div className="body9">
        <b className="schedule2">Schedule</b>
        <img
          className="logokadog-removebg-preview-2-icon2"
          alt=""
          src="/logokadogremovebgpreview-21@2x.png"
        />
        <FestivalCard />
        <ContainerSidebarNavigationEven dimensionLabel="/group5.svg" />
      </div>
      <img
        className="dashboard-icon-vector-2-11"
        alt=""
        src="/dashboardiconvector2-2@2x.png"
      />
    </div>
  );
};

export default RemoveEvents;
