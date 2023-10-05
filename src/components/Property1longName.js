import { useMemo } from "react";
import "./Property1longName.css";

const Property1longName = ({
  text,
  text1,
  showText,
  property1longNamePosition,
  property1longNameTop,
  property1longNameLeft,
  property1longNameJustifyContent,
  property1longNameWidth,
  textWidth,
  textColor,
  textFontFamily,
}) => {
  const property1longNameStyle = useMemo(() => {
    return {
      position: property1longNamePosition,
      top: property1longNameTop,
      left: property1longNameLeft,
      justifyContent: property1longNameJustifyContent,
      width: property1longNameWidth,
    };
  }, [
    property1longNamePosition,
    property1longNameTop,
    property1longNameLeft,
    property1longNameJustifyContent,
    property1longNameWidth,
  ]);

  const textStyle = useMemo(() => {
    return {
      width: textWidth,
    };
  }, [textWidth]);

  const text1Style = useMemo(() => {
    return {
      color: textColor,
      fontFamily: textFontFamily,
    };
  }, [textColor, textFontFamily]);

  return (
    <div className="property-1long-name" style={property1longNameStyle}>
      <div className="text3" style={textStyle}>
        {text}
      </div>
      <div className="text-container">
        {showText && (
          <div className="text4" style={text1Style}>
            {text1}
          </div>
        )}
      </div>
    </div>
  );
};

export default Property1longName;
