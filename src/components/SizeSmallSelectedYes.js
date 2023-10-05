import { useMemo } from "react";
import "./SizeSmallSelectedYes.css";

const SizeSmallSelectedYes = ({
  s,
  sizeSmallSelectedYesBorderRadius,
  sizeSmallSelectedYesBackgroundColor,
  sizeSmallSelectedYesWidth,
  sizeSmallSelectedYesPosition,
  sizeSmallSelectedYesTop,
  sizeSmallSelectedYesLeft,
  sizeSmallSelectedYesHeight,
  sizeSmallSelectedYesPadding,
  sizeSmallSelectedYesBoxSizing,
  sizeSmallSelectedYesCursor,
  sizeSmallSelectedYesBorder,
  sColor,
  sFontWeight,
  onButtonContainerClick,
}) => {
  const sizeSmallSelectedYesStyle = useMemo(() => {
    return {
      borderRadius: sizeSmallSelectedYesBorderRadius,
      backgroundColor: sizeSmallSelectedYesBackgroundColor,
      width: sizeSmallSelectedYesWidth,
      position: sizeSmallSelectedYesPosition,
      top: sizeSmallSelectedYesTop,
      left: sizeSmallSelectedYesLeft,
      height: sizeSmallSelectedYesHeight,
      padding: sizeSmallSelectedYesPadding,
      boxSizing: sizeSmallSelectedYesBoxSizing,
      cursor: sizeSmallSelectedYesCursor,
      border: sizeSmallSelectedYesBorder,
    };
  }, [
    sizeSmallSelectedYesBorderRadius,
    sizeSmallSelectedYesBackgroundColor,
    sizeSmallSelectedYesWidth,
    sizeSmallSelectedYesPosition,
    sizeSmallSelectedYesTop,
    sizeSmallSelectedYesLeft,
    sizeSmallSelectedYesHeight,
    sizeSmallSelectedYesPadding,
    sizeSmallSelectedYesBoxSizing,
    sizeSmallSelectedYesCursor,
    sizeSmallSelectedYesBorder,
  ]);

  const sStyle = useMemo(() => {
    return {
      color: sColor,
      fontWeight: sFontWeight,
    };
  }, [sColor, sFontWeight]);

  return (
    <div
      className="sizesmall-selectedyes"
      style={sizeSmallSelectedYesStyle}
      onClick={onButtonContainerClick}
    >
      <b className="s1" style={sStyle}>
        {s}
      </b>
    </div>
  );
};

export default SizeSmallSelectedYes;
