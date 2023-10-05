import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import DashboardContainer1 from "../components/DashboardContainer1";
import FormContainer1 from "../components/FormContainer1";
import CardContainer from "../components/CardContainer";
import "./ParadeSeeMore.css";

const ParadeSeeMore = () => {
  const navigate = useNavigate();

  const onSidenavContainer1Click = useCallback(() => {
    navigate("/dashboard-participants");
  }, [navigate]);

  const onSidenavContainer3Click = useCallback(() => {
    navigate("/schedule");
  }, [navigate]);

  return (
    <div className="paradesee-more">
      <Header logoutLeft="-44px" logoutWidth="1557px" buttonLeft="1418px" />
      <div className="body22">
        <DashboardContainer1 />
        <div className="body23">
          <FormContainer1
            dimensions="/group.svg"
            propCursor="unset"
            propCursor1="unset"
            propCursor2="unset"
            onSidenavContainer1Click={onSidenavContainer1Click}
            onSidenavContainer3Click={onSidenavContainer3Click}
          />
          <CardContainer
            dimensionCode="/vector8.svg"
            dimensionCodeImageUrl="/vector9.svg"
            eventTitle="Parade"
            productSizeCode="/bicaretdownfill2.svg"
            imageDimensionCode="/akariconssearch3.svg"
            imageDimensionCodeText="/fluentadd16filled2.svg"
            componentTitle="/edit-1-24.svg"
            imageDimensionCodeText2="/trash2-24.svg"
            imageDimensionCodeText3="/edit-1-24.svg"
            imageDimensionCodeText4="/trash2-24.svg"
            imageDimensionCodeText5="/edit-1-24.svg"
            imageCode="/trash2-24.svg"
            dimensionCodeText="/edit-1-24.svg"
            imageSizeCode="/trash2-24.svg"
            imageDimensionCodeText6="/edit-1-24.svg"
            imageCode2="/trash2-24.svg"
            imageDimensionCodeText7="/edit-1-24.svg"
            imageSizeCode2="/trash2-24.svg"
            imageCodeText="/edit-1-24.svg"
            imageDescription="/trash2-24.svg"
            dimensionCodeText2="/edit-1-24.svg"
            imageCodeText2="/trash2-24.svg"
            imageSizeCodeText="/edit-1-24.svg"
            imageCodeText3="/trash2-24.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default ParadeSeeMore;
