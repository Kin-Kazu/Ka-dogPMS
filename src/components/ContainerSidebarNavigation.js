import SelectedyesLogotao from "./SelectedyesLogotao";
import "./ContainerSidebarNavigation.css";

const ContainerSidebarNavigation = ({
  dimensionCode,
  onSidenavContainerClick,
  onSidenavContainer1Click,
  onSidenavContainer2Click,
  onSidenavContainer3Click,
  onSidenavContainer4Click,
  onSidenavContainer5Click,
}) => {
  return (
    <div className="sidebar-navigation3">
      <SelectedyesLogotao
        tao="/group5.svg"
        participants="Events"
        selectedyesLogotaoBackgroundColor="unset"
        selectedyesLogotaoWidth="265px"
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
        tao="/tao1@2x.png"
        participants="Participants"
        selectedyesLogotaoBackgroundColor="unset"
        selectedyesLogotaoWidth="259px"
        selectedyesLogotaoBorder="1px solid var(--color-lightblue)"
        selectedyesLogotaoCursor="pointer"
        selectedyesLogotaoGap="5px"
        taoIconWidth="26px"
        taoIconHeight="25px"
        taoIconObjectFit="cover"
        participantsFontSize="24px"
        participantsFontWeight="unset"
        onSidenavContainer2Click={onSidenavContainer1Click}
      />
      <SelectedyesLogotao
        tao="/list-11@2x.png"
        participants="Vaccine"
        selectedyesLogotaoBackgroundColor="unset"
        selectedyesLogotaoWidth="259px"
        selectedyesLogotaoBorder="1px solid var(--color-lightblue)"
        selectedyesLogotaoCursor="pointer"
        selectedyesLogotaoGap="8px"
        taoIconWidth="21px"
        taoIconHeight="25px"
        taoIconObjectFit="cover"
        participantsFontSize="24px"
        participantsFontWeight="unset"
        onSidenavContainer2Click={onSidenavContainer2Click}
      />
      <SelectedyesLogotao
        tao="/scheduleremovebgpreview-11@2x.png"
        participants="Schedule"
        selectedyesLogotaoBackgroundColor="unset"
        selectedyesLogotaoWidth="265px"
        selectedyesLogotaoBorder="1px solid var(--color-lightblue)"
        selectedyesLogotaoCursor="pointer"
        selectedyesLogotaoGap="5px"
        taoIconWidth="23px"
        taoIconHeight="24px"
        taoIconObjectFit="cover"
        participantsFontSize="24px"
        participantsFontWeight="unset"
        onSidenavContainer2Click={onSidenavContainer3Click}
      />
      <SelectedyesLogotao
        tao="/image-2@2x.png"
        participants="Judge"
        selectedyesLogotaoBackgroundColor="1px solid #c1e4ff"
        selectedyesLogotaoWidth="313px"
        selectedyesLogotaoBorder="unset"
        selectedyesLogotaoCursor="pointer"
        selectedyesLogotaoGap="5px"
        taoIconWidth="32px"
        taoIconHeight="32px"
        taoIconObjectFit="cover"
        participantsFontSize="32px"
        participantsFontWeight="unset"
        onSidenavContainer2Click={onSidenavContainer4Click}
      />
      <SelectedyesLogotao
        tao="/image-3@2x.png"
        participants="Member"
        selectedyesLogotaoBackgroundColor="unset"
        selectedyesLogotaoWidth="259px"
        selectedyesLogotaoBorder="1px solid var(--color-lightblue)"
        selectedyesLogotaoCursor="pointer"
        selectedyesLogotaoGap="3px"
        taoIconWidth="28px"
        taoIconHeight="28px"
        taoIconObjectFit="cover"
        participantsFontSize="24px"
        participantsFontWeight="unset"
        onSidenavContainer2Click={onSidenavContainer5Click}
      />
    </div>
  );
};

export default ContainerSidebarNavigation;
