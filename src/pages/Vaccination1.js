import Header from "../components/Header";
import AddVaccineForm from "../components/AddVaccineForm";
import FormContainer from "../components/FormContainer";
import "./Vaccination1.css";

const Vaccination1 = () => {
  return (
    <div className="vaccination1">
      <Header logoutLeft="0px" logoutWidth="1440px" buttonLeft="1288px" />
      <div className="body10">
        <b className="vaccination2">Vaccination</b>
        <img
          className="logokadog-removebg-preview-2-icon3"
          alt=""
          src="/logokadogremovebgpreview-21@2x.png"
        />
        <div className="inside-body2">
          <AddVaccineForm />
        </div>
        <FormContainer
          dimensionText="/group3.svg"
          judgingText="Judge"
          propPosition="absolute"
          propTop="163px"
          propLeft="32px"
          propFlexShrink="unset"
          propWidth="259px"
          propCursor="unset"
          propCursor1="unset"
          propCursor2="unset"
          propCursor3="unset"
          propWidth1="259px"
          propCursor4="unset"
          propCursor5="unset"
        />
      </div>
      <img
        className="dashboard-icon-vector-2-12"
        alt=""
        src="/dashboardiconvector2-2@2x.png"
      />
    </div>
  );
};

export default Vaccination1;
