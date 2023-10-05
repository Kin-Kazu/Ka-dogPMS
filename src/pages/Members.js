import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DashboardContainer from "../components/DashboardContainer";
import ContainerSidebarNavigationEven1 from "../components/ContainerSidebarNavigationEven1";
import FormContainer2 from "../components/FormContainer2";
import Header from "../components/Header";
import "./Members.css";

const Members = () => {
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
    <div className="members">
      <div className="body13">
        <DashboardContainer
          pageTitle="Dashboard"
          dashboardIconVector22Gap="623px"
          dashboardWidth="639px"
          propWidth="unset"
          propHeight="unset"
        />
        <div className="body14">
          <ContainerSidebarNavigationEven1
            dimensionLabel="/group3.svg"
            propCursor="pointer"
            onSidenavContainerClick={onSidenavContainerClick}
            onSidenavContainer1Click={onSidenavContainer1Click}
            onSidenavContainer2Click={onSidenavContainer2Click}
            onSidenavContainer3Click={onSidenavContainer3Click}
            onSidenavContainer4Click={onSidenavContainer4Click}
            onSidenavContainer5Click={onSidenavContainer5Click}
          />
          <div className="inside-body4">
            <FormContainer2
              imageSize="/edit-1-22.svg"
              imageCode="/trash2-22.svg"
              imageCodeText="/edit-1-23.svg"
              imageCodeIdentifier="/trash2-23.svg"
              imageCodeVariant="/edit-1-22.svg"
              imageCodeIdentifierText="/trash2-22.svg"
              imageCodeIdentifierText2="/edit-1-23.svg"
              imageCode2="/trash2-23.svg"
              imageCodeText2="/edit-1-22.svg"
              imageCodeIdentifier2="/trash2-22.svg"
              imageCodeIdentifierText3="/edit-1-23.svg"
              imageCodeIdentifierText4="/trash2-23.svg"
              imageCodeIdentifierSize="/edit-1-22.svg"
              imageCodeIdentifierSizeTe="/trash2-22.svg"
              frameDivWidth="unset"
            />
          </div>
        </div>
      </div>
      <Header logoutLeft="0px" logoutWidth="1574px" buttonLeft="1438px" />
    </div>
  );
};

export default Members;
