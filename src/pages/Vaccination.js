import Header from "../components/Header";
import VaccinationForm from "../components/VaccinationForm";
import ShowTable from "../components/ShowTable";
import FormContainer from "../components/FormContainer";
import "./Vaccination.css";

const Vaccination = () => {
  return (
    <div className="vaccination3">
      <Header logoutLeft="0px" logoutWidth="1440px" buttonLeft="1288px" />
      <div className="body11">
        <b className="vaccination4">Vaccination</b>
        <img
          className="logokadog-removebg-preview-2-icon4"
          alt=""
          src="/logokadogremovebgpreview-21@2x.png"
        />
        <div className="inside-body3" />
        <div className="table">
          <VaccinationForm />
          <ShowTable />
          <div className="div">
            <div className="previous-parent">
              <div className="previous">Previous</div>
              <div className="wrapper">
                <div className="div1">1</div>
              </div>
              <div className="container">
                <div className="div1">2</div>
              </div>
              <div className="container">
                <div className="div1">3</div>
              </div>
              <div className="previous">Next</div>
            </div>
          </div>
        </div>
        <FormContainer dimensionText="/group5.svg" judgingText="Judging" />
      </div>
      <img
        className="dashboard-icon-vector-2-13"
        alt=""
        src="/dashboardiconvector2-2@2x.png"
      />
    </div>
  );
};

export default Vaccination;
