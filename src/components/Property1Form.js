import { useMemo } from "react";
import "./Property1Form.css";

const Property1Form = ({
  text,
  property1FormBorderRadius,
  property1FormBorder,
  property1FormWidth,
  property1FormHeight,
  property1FormPosition,
  property1FormTop,
  property1FormLeft,
}) => {
  const property1FormStyle = useMemo(() => {
    return {
      borderRadius: property1FormBorderRadius,
      border: property1FormBorder,
      width: property1FormWidth,
      height: property1FormHeight,
      position: property1FormPosition,
      top: property1FormTop,
      left: property1FormLeft,
    };
  }, [
    property1FormBorderRadius,
    property1FormBorder,
    property1FormWidth,
    property1FormHeight,
    property1FormPosition,
    property1FormTop,
    property1FormLeft,
  ]);

  return (
    <div className="property-1form" style={property1FormStyle}>
      <div className="text2">{text}</div>
    </div>
  );
};

export default Property1Form;
