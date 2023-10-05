import { useMemo } from "react";
import SelectedyesLogotao from "./SelectedyesLogotao";
import "./ContainerSidebarNavigationEven.css";

const ContainerSidebarNavigationEven = ({
  dimensionLabel,
  propPosition,
  propTop,
  propLeft,
  propFlexShrink,
  propWidth,
  propCursor,
  propCursor1,
  propCursor2,
  propWidth1,
  propCursor3,
  propCursor4,
  propCursor5,
  onSidenavContainerClick,
  onSidenavContainer1Click,
  onSidenavContainer2Click,
  onSidenavContainer3Click,
  onSidenavContainer4Click,
  onSidenavContainer5Click,
}) => {
  const sidebarNavigationStyle = useMemo(() => {
    return {
      position: propPosition,
      top: propTop,
      left: propLeft,
      flexShrink: propFlexShrink,
    };
  }, [propPosition, propTop, propLeft, propFlexShrink]);

  const selectedyesLogotaoStyle = useMemo(() => {
    return {
      width: propWidth,
      cursor: propCursor,
    };
  }, [propWidth, propCursor]);

  const selectedyesLogotaoStyle1 = useMemo(() => {
    return {
      cursor: propCursor1,
    };
  }, [propCursor1]);

  const selectedyesLogotaoStyle2 = useMemo(() => {
    return {
      cursor: propCursor2,
    };
  }, [propCursor2]);

  const selectedyesLogotaoStyle3 = useMemo(() => {
    return {
      width: propWidth1,
      cursor: propCursor3,
    };
  }, [propWidth1, propCursor3]);

  const selectedyesLogotaoStyle4 = useMemo(() => {
    return {
      cursor: propCursor4,
    };
  }, [propCursor4]);

  const selectedyesLogotaoStyle5 = useMemo(() => {
    return {
      cursor: propCursor5,
    };
  }, [propCursor5]);

  return (
    <div className="sidebar-navigation1" style={sidebarNavigationStyle}>
      <SelectedyesLogotao
        tao="/group5.svg"
        participants="Events"
        selectedyesLogotaoBackgroundColor="unset"
        selectedyesLogotaoWidth="259px"
        selectedyesLogotaoBorder="1px solid var(--color-lightblue)"
        selectedyesLogotaoCursor="unset"
        selectedyesLogotaoGap="11px"
        taoIconWidth="18.5px"
        taoIconHeight="20px"
        taoIconObjectFit="unset"
        participantsFontSize="24px"
        participantsFontWeight="unset"
      />
      <SelectedyesLogotao
        tao="/tao1@2x.png"
        participants="Participants"
        selectedyesLogotaoBackgroundColor="unset"
        selectedyesLogotaoWidth="259px"
        selectedyesLogotaoBorder="1px solid var(--color-lightblue)"
        selectedyesLogotaoCursor="unset"
        selectedyesLogotaoGap="5px"
        taoIconWidth="26px"
        taoIconHeight="25px"
        taoIconObjectFit="cover"
        participantsFontSize="24px"
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
        tao="/scheduleremovebgpreview-1@2x.png"
        participants="Schedule"
        selectedyesLogotaoBackgroundColor="1px solid #c1e4ff"
        selectedyesLogotaoWidth="313px"
        selectedyesLogotaoBorder="unset"
        selectedyesLogotaoCursor="unset"
        selectedyesLogotaoGap="5px"
        taoIconWidth="37px"
        taoIconHeight="39px"
        taoIconObjectFit="cover"
        participantsFontSize="32px"
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
  );
};

export default ContainerSidebarNavigationEven;
