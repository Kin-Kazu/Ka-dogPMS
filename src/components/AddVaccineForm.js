import TimeContainer from "./TimeContainer";
import SizeSmallSelectedYes from "./SizeSmallSelectedYes";
import "./AddVaccineForm.css";

const AddVaccineForm = () => {
  return (
    <div className="vaccine">
      <b className="title9">Add Vaccine</b>
      <TimeContainer
        appointmentTitle="Vaccine"
        itemQuantity="Quantity"
        appointmentDate="Date"
        eventTime="Time"
      />
      <div className="buttons2">
        <SizeSmallSelectedYes
          s="Confirm"
          sizeSmallSelectedYesBorderRadius="20px"
          sizeSmallSelectedYesBackgroundColor="#0386d0"
          sizeSmallSelectedYesWidth="115px"
          sizeSmallSelectedYesPosition="unset"
          sizeSmallSelectedYesTop="unset"
          sizeSmallSelectedYesLeft="unset"
          sizeSmallSelectedYesHeight="unset"
          sizeSmallSelectedYesPadding="var(--padding-3xs) var(--padding-21xl)"
          sizeSmallSelectedYesBoxSizing="border-box"
          sizeSmallSelectedYesCursor="unset"
          sizeSmallSelectedYesBorder="unset"
          sColor="#fff"
          sFontWeight="unset"
        />
        <SizeSmallSelectedYes
          s="Cancel"
          sizeSmallSelectedYesBorderRadius="20px"
          sizeSmallSelectedYesBackgroundColor="#a85a5a"
          sizeSmallSelectedYesWidth="115px"
          sizeSmallSelectedYesPosition="unset"
          sizeSmallSelectedYesTop="unset"
          sizeSmallSelectedYesLeft="unset"
          sizeSmallSelectedYesHeight="unset"
          sizeSmallSelectedYesPadding="var(--padding-3xs) var(--padding-21xl)"
          sizeSmallSelectedYesBoxSizing="border-box"
          sizeSmallSelectedYesCursor="unset"
          sizeSmallSelectedYesBorder="unset"
          sColor="#fff"
          sFontWeight="unset"
        />
      </div>
    </div>
  );
};

export default AddVaccineForm;
