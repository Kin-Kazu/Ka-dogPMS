import { useMemo } from "react";
import SelectedyesLogotao from "./SelectedyesLogotao";
import "./FormContainer1.css";

const FormContainer1 = ({
  dimensions,
  propCursor,
  propCursor1,
  propCursor2,
  onSidenavContainer1Click,
  onSidenavContainer2Click,
  onSidenavContainer3Click,
  onSidenavContainer4Click,
  onSidenavContainer5Click,
}) => {
  const selectedyesLogotaoStyle = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

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

  return (
    <div className="sidebar-navigation5">
      <SelectedyesLogotao
        tao="/group.svg"
        participants="Events"
        selectedyesLogotaoBackgroundColor="1px solid #c1e4ff"
        selectedyesLogotaoWidth="313px"
        selectedyesLogotaoBorder="unset"
        selectedyesLogotaoCursor="unset"
        selectedyesLogotaoGap="5px"
        taoIconWidth="34.5px"
        taoIconHeight="37.41px"
        taoIconObjectFit="unset"
        participantsFontSize="32px"
        participantsFontWeight="unset"
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

export default FormContainer1;
