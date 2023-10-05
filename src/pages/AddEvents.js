import Header from "../components/Header";
import ContainerSidebarNavigationEven from "../components/ContainerSidebarNavigationEven";
import ScheduleFormContainer from "../components/ScheduleFormContainer";
import "./AddEvents.css";

const AddEvents = () => {
  return (
    <div className="add-events">
      <Header logoutLeft="0px" logoutWidth="1440px" buttonLeft="1288px" />
      <div className="body8">
        <b className="schedule1">Schedule</b>
        <img
          className="logokadog-removebg-preview-2-icon1"
          alt=""
          src="/logokadogremovebgpreview-21@2x.png"
        />
        <div className="inside-body1" />
        <ContainerSidebarNavigationEven
          dimensionLabel="/group3.svg"
          propPosition="absolute"
          propTop="163px"
          propLeft="32px"
          propFlexShrink="unset"
          propWidth="259px"
          propCursor="unset"
          propCursor1="unset"
          propCursor2="unset"
          propWidth1="313px"
          propCursor3="unset"
          propCursor4="unset"
          propCursor5="unset"
        />
        <ScheduleFormContainer />
      </div>
      <img
        className="dashboard-icon-vector-2-1"
        alt=""
        src="/dashboardiconvector2-2@2x.png"
      />
    </div>
  );
};

export default AddEvents;
