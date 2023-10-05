import TimeContainer from "./TimeContainer";
import Property1longName from "./Property1longName";
import Property1Form from "./Property1Form";
import SizeSmallSelectedYes from "./SizeSmallSelectedYes";
import "./ScheduleFormContainer.css";

const ScheduleFormContainer = () => {
  return (
    <div className="schedule-form">
      <b className="title7">Add Event</b>
      <div className="image">
        <img
          className="addbtn-removebg-preview-3-icon2"
          alt=""
          src="/addbtnremovebgpreview-32@2x.png"
        />
        <div className="title7">Insert Image</div>
      </div>
      <TimeContainer
        appointmentTitle="Title"
        itemQuantity="Date"
        appointmentDate="Time"
        eventTime="Address"
        inputFieldsGap="5px"
      />
      <div className="activities">
        <Property1longName
          text="Events"
          text1="Fun Match"
          showText
          property1longNamePosition="absolute"
          property1longNameTop="0px"
          property1longNameLeft="0px"
          property1longNameJustifyContent="flex-start"
          property1longNameWidth="unset"
          textWidth="72px"
          textColor="#000"
          textFontFamily="Arapey"
        />
        <Property1longName
          text=" "
          text1="Pet Blessing"
          showText
          property1longNamePosition="absolute"
          property1longNameTop="33px"
          property1longNameLeft="0px"
          property1longNameJustifyContent="flex-start"
          property1longNameWidth="unset"
          textWidth="72px"
          textColor="#000"
          textFontFamily="Arapey"
        />
        <Property1longName
          text=" "
          text1="Fashion Show"
          showText
          property1longNamePosition="absolute"
          property1longNameTop="66px"
          property1longNameLeft="0px"
          property1longNameJustifyContent="flex-start"
          property1longNameWidth="unset"
          textWidth="72px"
          textColor="#000"
          textFontFamily="Arapey"
        />
        <Property1longName
          text=" "
          text1="Parade"
          showText
          property1longNamePosition="absolute"
          property1longNameTop="99px"
          property1longNameLeft="0px"
          property1longNameJustifyContent="flex-start"
          property1longNameWidth="unset"
          textWidth="72px"
          textColor="#000"
          textFontFamily="Arapey"
        />
        <img className="checkmark-icon1" alt="" src="/checkmark1.svg" />
        <img className="checkmark-icon2" alt="" src="/checkmark1.svg" />
        <img className="checkmark-icon3" alt="" src="/checkmark1.svg" />
        <img className="checkmark-icon4" alt="" src="/checkmark1.svg" />
      </div>
      <div className="description-parent">
        <div className="description">Description</div>
        <Property1Form
          property1FormBorderRadius="5px"
          property1FormBorder="1px solid var(--color-black)"
          property1FormWidth="376px"
          property1FormHeight="68px"
          property1FormPosition="absolute"
          property1FormTop="25px"
          property1FormLeft="0px"
        />
      </div>
      <div className="buttons1">
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

export default ScheduleFormContainer;
