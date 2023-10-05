import { useMemo } from "react";
import "./DashboardContainer.css";

const DashboardContainer = ({
  pageTitle,
  dashboardIconVector22Gap,
  dashboardWidth,
  propWidth,
  propHeight,
}) => {
  const titleStyle = useMemo(() => {
    return {
      gap: dashboardIconVector22Gap,
    };
  }, [dashboardIconVector22Gap]);

  const titletileStyle = useMemo(() => {
    return {
      width: dashboardWidth,
    };
  }, [dashboardWidth]);

  const dashboardStyle = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  return (
    <div className="title11" style={titleStyle}>
      <div className="titletile" style={titletileStyle}>
        <img
          className="dashboard-icon-vector-2-2"
          alt=""
          src="/dashboardiconvector2-2@2x.png"
        />
        <b className="dashboard" style={dashboardStyle}>
          {pageTitle}
        </b>
      </div>
      <img
        className="logokadog-removebg-preview-3-icon1"
        alt=""
        src="/logokadogremovebgpreview-31@2x.png"
      />
    </div>
  );
};

export default DashboardContainer;
