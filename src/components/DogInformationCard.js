import Property1longName from "./Property1longName";
import Property1Sex from "./Property1Sex";
import SizeSmallSelectedYes from "./SizeSmallSelectedYes";
import "./DogInformationCard.css";

const DogInformationCard = ({ dogName1 }) => {
  return (
    <div className="dog-1-parent">
      <b className="dog-1">{dogName1}</b>
      <Property1longName
        text="Owner/Handler"
        text1="Placeholder"
        showText={false}
        property1longNamePosition="unset"
        property1longNameTop="unset"
        property1longNameLeft="unset"
        property1longNameJustifyContent="flex-start"
        property1longNameWidth="465px"
        textWidth="122px"
        textColor="#afafaf"
        textFontFamily="Arapey"
      />
      <Property1longName
        text="Dog Breed"
        text1="Placeholder"
        showText={false}
        property1longNamePosition="unset"
        property1longNameTop="unset"
        property1longNameLeft="unset"
        property1longNameJustifyContent="flex-start"
        property1longNameWidth="465px"
        textWidth="122px"
        textColor="#afafaf"
        textFontFamily="Arapey"
      />
      <Property1Sex
        text="Sex"
        showFrameDiv
        property1SexWidth="465px"
        property1SexPosition="unset"
        property1SexTop="unset"
        property1SexLeft="unset"
      />
      <Property1longName
        text="Date of Birth"
        text1="Placeholder"
        showText={false}
        property1longNamePosition="unset"
        property1longNameTop="unset"
        property1longNameLeft="unset"
        property1longNameJustifyContent="flex-start"
        property1longNameWidth="465px"
        textWidth="122px"
        textColor="#afafaf"
        textFontFamily="Arapey"
      />
      <Property1longName
        text="Age"
        text1="Placeholder"
        showText={false}
        property1longNamePosition="unset"
        property1longNameTop="unset"
        property1longNameLeft="unset"
        property1longNameJustifyContent="flex-start"
        property1longNameWidth="465px"
        textWidth="122px"
        textColor="#afafaf"
        textFontFamily="Arapey"
      />
      <Property1longName
        text="Event"
        showText
        property1longNamePosition="unset"
        property1longNameTop="unset"
        property1longNameLeft="unset"
        property1longNameJustifyContent="flex-start"
        property1longNameWidth="465px"
        textWidth="122px"
        textColor="#000"
        textFontFamily="unset"
      />
      <div className="inputfields-group">
        <Property1Sex
          text="Size"
          showFrameDiv={false}
          property1SexWidth="64px"
          property1SexPosition="absolute"
          property1SexTop="0px"
          property1SexLeft="0px"
        />
        <div className="size-selection">
          <SizeSmallSelectedYes
            s="S"
            sizeSmallSelectedYesBorderRadius="25px"
            sizeSmallSelectedYesBackgroundColor="#8de97e"
            sizeSmallSelectedYesWidth="41px"
            sizeSmallSelectedYesPosition="unset"
            sizeSmallSelectedYesTop="unset"
            sizeSmallSelectedYesLeft="unset"
            sizeSmallSelectedYesHeight="unset"
            sizeSmallSelectedYesPadding="unset"
            sizeSmallSelectedYesBoxSizing="unset"
            sizeSmallSelectedYesCursor="unset"
            sizeSmallSelectedYesBorder="unset"
            sColor="#000"
            sFontWeight="unset"
          />
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
            sizeSmallSelectedYesBorder="1px solid var(--color-lightgreen)"
            sColor="#000"
            sFontWeight="unset"
          />
          <SizeSmallSelectedYes
            s="L"
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
            sizeSmallSelectedYesBorder="1px solid var(--color-lightgreen)"
            sColor="#000"
            sFontWeight="unset"
          />
          <SizeSmallSelectedYes
            s="XL"
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
            sizeSmallSelectedYesBorder="1px solid var(--color-lightgreen)"
            sColor="#000"
            sFontWeight="unset"
          />
        </div>
      </div>
    </div>
  );
};

export default DogInformationCard;
