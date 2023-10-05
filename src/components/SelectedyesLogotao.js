import { useMemo } from "react";
import "./SelectedyesLogotao.css";

const SelectedyesLogotao = ({
  tao,
  participants,
  selectedyesLogotaoBackgroundColor,
  selectedyesLogotaoWidth,
  selectedyesLogotaoBorder,
  selectedyesLogotaoCursor,
  selectedyesLogotaoGap,
  taoIconWidth,
  taoIconHeight,
  taoIconObjectFit,
  participantsFontSize,
  participantsFontWeight,
  onSidenavContainer2Click,
}) => {
  const selectedyesLogotaoStyle = useMemo(() => {
    return {
      backgroundColor: selectedyesLogotaoBackgroundColor,
      width: selectedyesLogotaoWidth,
      border: selectedyesLogotaoBorder,
      cursor: selectedyesLogotaoCursor,
      gap: selectedyesLogotaoGap,
    };
  }, [
    selectedyesLogotaoBackgroundColor,
    selectedyesLogotaoWidth,
    selectedyesLogotaoBorder,
    selectedyesLogotaoCursor,
    selectedyesLogotaoGap,
  ]);

  const taoIconStyle = useMemo(() => {
    return {
      width: taoIconWidth,
      height: taoIconHeight,
      objectFit: taoIconObjectFit,
    };
  }, [taoIconWidth, taoIconHeight, taoIconObjectFit]);

  const participantsStyle = useMemo(() => {
    return {
      fontSize: participantsFontSize,
      fontWeight: participantsFontWeight,
    };
  }, [participantsFontSize, participantsFontWeight]);

  return (
    <div
      className="selectedyes-logotao"
      style={selectedyesLogotaoStyle}
      onClick={onSidenavContainer2Click}
    >
      <img className="tao-icon" alt="" src={tao} style={taoIconStyle} />
      <b className="participants2" style={participantsStyle}>
        {participants}
      </b>
    </div>
  );
};

export default SelectedyesLogotao;
