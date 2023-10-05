import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DashboardContainer from "../components/DashboardContainer";
import SelectedyesLogotao from "../components/SelectedyesLogotao";
import FormContainer2 from "../components/FormContainer2";
import Header from "../components/Header";
import "./DashboardParticipants.css";

const DashboardParticipants = () => {
  const navigate = useNavigate();

  const onSidenavContainerClick = useCallback(() => {
    navigate("/dashboard-events");
  }, [navigate]);

  return (
    <div className="dashboard-participants">
      <div className="body15">
        <DashboardContainer
          pageTitle="Dashboard"
          dashboardIconVector22Gap="626px"
          dashboardWidth="639px"
          propWidth="unset"
          propHeight="unset"
        />
        <div className="body16">
          <div className="sidebar-navigation">
            <SelectedyesLogotao
              tao="/group3.svg"
              participants="Events"
              selectedyesLogotaoBackgroundColor="unset"
              selectedyesLogotaoWidth="259px"
              selectedyesLogotaoBorder="1px solid var(--color-lightblue)"
              selectedyesLogotaoCursor="pointer"
              selectedyesLogotaoGap="11px"
              taoIconWidth="18.5px"
              taoIconHeight="20px"
              taoIconObjectFit="unset"
              participantsFontSize="24px"
              participantsFontWeight="unset"
              onSidenavContainer2Click={onSidenavContainerClick}
            />
            <SelectedyesLogotao
              tao="/tao@2x.png"
              participants="Participants"
              selectedyesLogotaoBackgroundColor="1px solid #c1e4ff"
              selectedyesLogotaoWidth="313px"
              selectedyesLogotaoBorder="unset"
              selectedyesLogotaoCursor="unset"
              selectedyesLogotaoGap="5px"
              taoIconWidth="36px"
              taoIconHeight="35px"
              taoIconObjectFit="cover"
              participantsFontSize="32px"
              participantsFontWeight="unset"
            />
            <SelectedyesLogotao
              tao="/list-11@2x.png"
              participants="Vaccine"
              selectedyesLogotaoBackgroundColor="unset"
              selectedyesLogotaoWidth="259px"
              selectedyesLogotaoBorder="1px solid var(--color-lightblue)"
              selectedyesLogotaoCursor="unset"
              selectedyesLogotaoGap="8px"
              taoIconWidth="21px"
              taoIconHeight="25px"
              taoIconObjectFit="cover"
              participantsFontSize="24px"
              participantsFontWeight="unset"
            />
            <SelectedyesLogotao
              tao="/scheduleremovebgpreview-11@2x.png"
              participants="Schedule"
              selectedyesLogotaoBackgroundColor="unset"
              selectedyesLogotaoWidth="265px"
              selectedyesLogotaoBorder="1px solid var(--color-lightblue)"
              selectedyesLogotaoCursor="unset"
              selectedyesLogotaoGap="5px"
              taoIconWidth="23px"
              taoIconHeight="24px"
              taoIconObjectFit="cover"
              participantsFontSize="24px"
              participantsFontWeight="unset"
            />
            <SelectedyesLogotao
              tao="/image-1@2x.png"
              participants="Judge"
              selectedyesLogotaoBackgroundColor="unset"
              selectedyesLogotaoWidth="259px"
              selectedyesLogotaoBorder="1px solid var(--color-lightblue)"
              selectedyesLogotaoCursor="unset"
              selectedyesLogotaoGap="3px"
              taoIconWidth="26px"
              taoIconHeight="26px"
              taoIconObjectFit="cover"
              participantsFontSize="24px"
              participantsFontWeight="unset"
            />
            <SelectedyesLogotao
              tao="/image-3@2x.png"
              participants="Member"
              selectedyesLogotaoBackgroundColor="unset"
              selectedyesLogotaoWidth="259px"
              selectedyesLogotaoBorder="1px solid var(--color-lightblue)"
              selectedyesLogotaoCursor="unset"
              selectedyesLogotaoGap="3px"
              taoIconWidth="28px"
              taoIconHeight="28px"
              taoIconObjectFit="cover"
              participantsFontSize="24px"
              participantsFontWeight="unset"
            />
          </div>
          <div className="inside-body5">
            <div className="title">
              <b className="all-participants">All Participants</b>
            </div>
            <FormContainer2
              imageSize="/edit-1-23.svg"
              imageCode="/trash2-23.svg"
              imageCodeText="/edit-1-22.svg"
              imageCodeIdentifier="/trash2-22.svg"
              imageCodeVariant="/edit-1-23.svg"
              imageCodeIdentifierText="/trash2-23.svg"
              imageCodeIdentifierText2="/edit-1-22.svg"
              imageCode2="/trash2-22.svg"
              imageCodeText2="/edit-1-23.svg"
              imageCodeIdentifier2="/trash2-23.svg"
              imageCodeIdentifierText3="/edit-1-22.svg"
              imageCodeIdentifierText4="/trash2-22.svg"
              imageCodeIdentifierSize="/edit-1-23.svg"
              imageCodeIdentifierSizeTe="/trash2-23.svg"
            />
          </div>
        </div>
      </div>
      <Header logoutLeft="0px" logoutWidth="1549px" buttonLeft="1396px" />
    </div>
  );
};

export default DashboardParticipants;
