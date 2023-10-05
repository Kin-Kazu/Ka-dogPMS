import { useMemo } from "react";
import Property1longName from "./Property1longName";
import "./TimeContainer.css";

const TimeContainer = ({
  appointmentTitle,
  itemQuantity,
  appointmentDate,
  eventTime,
  inputFieldsGap,
}) => {
  const divStyle = useMemo(() => {
    return {
      gap: inputFieldsGap,
    };
  }, [inputFieldsGap]);

  return (
    <div className="div20" style={divStyle}>
      <Property1longName
        text="Vaccine"
        text1="Placeholder"
        showText={false}
        property1longNamePosition="unset"
        property1longNameTop="unset"
        property1longNameLeft="unset"
        property1longNameJustifyContent="flex-start"
        property1longNameWidth="unset"
        textWidth="72px"
        textColor="#afafaf"
        textFontFamily="Arapey"
      />
      <Property1longName
        text="Quantity"
        text1="Placeholder"
        showText={false}
        property1longNamePosition="unset"
        property1longNameTop="unset"
        property1longNameLeft="unset"
        property1longNameJustifyContent="flex-start"
        property1longNameWidth="unset"
        textWidth="72px"
        textColor="#afafaf"
        textFontFamily="Arapey"
      />
      <Property1longName
        text="Date"
        text1="Placeholder"
        showText={false}
        property1longNamePosition="unset"
        property1longNameTop="unset"
        property1longNameLeft="unset"
        property1longNameJustifyContent="flex-start"
        property1longNameWidth="unset"
        textWidth="72px"
        textColor="#afafaf"
        textFontFamily="Arapey"
      />
      <Property1longName
        text="Time"
        text1="Placeholder"
        showText={false}
        property1longNamePosition="unset"
        property1longNameTop="unset"
        property1longNameLeft="unset"
        property1longNameJustifyContent="flex-start"
        property1longNameWidth="unset"
        textWidth="72px"
        textColor="#afafaf"
        textFontFamily="Arapey"
      />
    </div>
  );
};

export default TimeContainer;
