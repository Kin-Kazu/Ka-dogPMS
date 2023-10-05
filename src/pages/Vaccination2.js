import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import DashboardContainer from "../components/DashboardContainer";
import FormContainer from "../components/FormContainer";
import "./Vaccination2.css";

const Vaccination2 = () => {
  const navigate = useNavigate();

  const onSidenavContainerClick = useCallback(() => {
    navigate("/dashboard-events");
  }, [navigate]);

  const onSidenavContainer1Click = useCallback(() => {
    navigate("/dashboard-participants");
  }, [navigate]);

  const onSidenavContainer2Click = useCallback(() => {
    navigate("/vaccination");
  }, [navigate]);

  const onSidenavContainer3Click = useCallback(() => {
    navigate("/schedule");
  }, [navigate]);

  const onSidenavContainer4Click = useCallback(() => {
    navigate("/judging");
  }, [navigate]);

  const onSidenavContainer5Click = useCallback(() => {
    navigate("/members");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/pet-blessingssee-more");
  }, [navigate]);

  return (
    <div className="vaccination">
      <Header logoutLeft="0px" logoutWidth="1440px" buttonLeft="1288px" />
      <div className="body6">
        <DashboardContainer
          pageTitle="Vaccination"
          dashboardIconVector22Gap="456px"
          dashboardWidth="672px"
          propWidth="unset"
          propHeight="unset"
        />
        <div className="body7">
          <FormContainer
            dimensionText="/group3.svg"
            judgingText="Judge"
            propPosition="unset"
            propTop="unset"
            propLeft="unset"
            propFlexShrink="0"
            propWidth="265px"
            propCursor="pointer"
            propCursor1="pointer"
            propCursor2="pointer"
            propCursor3="pointer"
            propWidth1="265px"
            propCursor4="pointer"
            propCursor5="pointer"
            onSidenavContainerClick={onSidenavContainerClick}
            onSidenavContainer1Click={onSidenavContainer1Click}
            onSidenavContainer2Click={onSidenavContainer2Click}
            onSidenavContainer3Click={onSidenavContainer3Click}
            onSidenavContainer4Click={onSidenavContainer4Click}
            onSidenavContainer5Click={onSidenavContainer5Click}
          />
          <div className="inside-body">
            <div className="add-more">
              <img
                className="addbtn-removebg-preview-3-icon"
                alt=""
                src="/addbtnremovebgpreview-31@2x.png"
              />
              <div className="add-vaccination">Add Vaccination</div>
            </div>
            <div className="vaccine-anti-ra">
              <img className="group-icon" alt="" src="/group4.svg" />
              <div className="anti-rabies-parent">
                <b className="anti-rabies">Anti Rabies</b>
                <div className="available">Available:</div>
                <b className="b">41/100</b>
              </div>
              <div className="vector-parent" onClick={onGroupContainer1Click}>
                <img className="vector-icon" alt="" src="/vector6.svg" />
                <img className="vector-icon1" alt="" src="/vector7.svg" />
                <div className="more-details">More Details</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vaccination2;
