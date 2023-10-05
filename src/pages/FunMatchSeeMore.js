import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import DashboardContainer1 from "../components/DashboardContainer1";
import FormContainer1 from "../components/FormContainer1";
import CardContainer from "../components/CardContainer";
import "./FunMatchSeeMore.css";

const FunMatchSeeMore = () => {
  const navigate = useNavigate();

  const onSidenavContainer1Click = useCallback(() => {
    navigate("/dashboard-participants");
  }, [navigate]);

  const onSidenavContainer3Click = useCallback(() => {
    navigate("/schedule");
  }, [navigate]);

  return (
    <div className="fun-matchsee-more">
      <Header logoutLeft="-44px" logoutWidth="1557px" buttonLeft="1418px" />
      <div className="body20">
        <DashboardContainer1 />
        <div className="body21">
          <FormContainer1
            dimensions="/group2.svg"
            propCursor="unset"
            propCursor1="unset"
            propCursor2="unset"
            onSidenavContainer1Click={onSidenavContainer1Click}
            onSidenavContainer3Click={onSidenavContainer3Click}
          />
          <CardContainer
            dimensionCode="/vector2.svg"
            dimensionCodeImageUrl="/vector3.svg"
            eventTitle="Fun Match"
            productSizeCode="/bicaretdownfill.svg"
            imageDimensionCode="/akariconssearch.svg"
            imageDimensionCodeText="/fluentadd16filled.svg"
            componentTitle="/edit-1-2.svg"
            imageDimensionCodeText2="/trash2-2.svg"
            imageDimensionCodeText3="/edit-1-2.svg"
            imageDimensionCodeText4="/trash2-2.svg"
            imageDimensionCodeText5="/edit-1-2.svg"
            imageCode="/trash2-2.svg"
            dimensionCodeText="/edit-1-2.svg"
            imageSizeCode="/trash2-2.svg"
            imageDimensionCodeText6="/edit-1-2.svg"
            imageCode2="/trash2-2.svg"
            imageDimensionCodeText7="/edit-1-2.svg"
            imageSizeCode2="/trash2-2.svg"
            imageCodeText="/edit-1-2.svg"
            imageDescription="/trash2-2.svg"
            dimensionCodeText2="/edit-1-2.svg"
            imageCodeText2="/trash2-2.svg"
            imageSizeCodeText="/edit-1-2.svg"
            imageCodeText3="/trash2-2.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FunMatchSeeMore;
