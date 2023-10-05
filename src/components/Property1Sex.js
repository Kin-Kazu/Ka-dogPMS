import { useMemo } from "react";
import SizeSmallSelectedYes from "./SizeSmallSelectedYes";
import "./Property1Sex.css";

const Property1Sex = ({
  text,
  showFrameDiv,
  property1SexWidth,
  property1SexPosition,
  property1SexTop,
  property1SexLeft,
}) => {
  const property1SexStyle = useMemo(() => {
    return {
      width: property1SexWidth,
      position: property1SexPosition,
      top: property1SexTop,
      left: property1SexLeft,
    };
  }, [
    property1SexWidth,
    property1SexPosition,
    property1SexTop,
    property1SexLeft,
  ]);

  return (
    <div className="property-1sex" style={property1SexStyle}>
      <div className="text5">{text}</div>
      {showFrameDiv && (
        <div className="sex-selection-wrapper">
          <div className="sex-selection">
            <SizeSmallSelectedYes
              s="M"
              sizeSmallSelectedYesBorderRadius="25px"
              sizeSmallSelectedYesBackgroundColor="unset"
              sizeSmallSelectedYesWidth="41px"
              sizeSmallSelectedYesPosition="unset"
              sizeSmallSelectedYesTop="unset"
              sizeSmallSelectedYesLeft="unset"
              sizeSmallSelectedYesHeight="unset"
              sizeSmallSelectedYesPadding="unset"
              sizeSmallSelectedYesBoxSizing="border-box"
              sizeSmallSelectedYesCursor="unset"
              sizeSmallSelectedYesBorder="1px solid var(--color-black)"
              sColor="#000"
              sFontWeight="unset"
            />
            <SizeSmallSelectedYes
              s="F"
              sizeSmallSelectedYesBorderRadius="25px"
              sizeSmallSelectedYesBackgroundColor="unset"
              sizeSmallSelectedYesWidth="41px"
              sizeSmallSelectedYesPosition="unset"
              sizeSmallSelectedYesTop="unset"
              sizeSmallSelectedYesLeft="unset"
              sizeSmallSelectedYesHeight="unset"
              sizeSmallSelectedYesPadding="unset"
              sizeSmallSelectedYesBoxSizing="border-box"
              sizeSmallSelectedYesCursor="unset"
              sizeSmallSelectedYesBorder="1px solid var(--color-black)"
              sColor="#000"
              sFontWeight="unset"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Property1Sex;
