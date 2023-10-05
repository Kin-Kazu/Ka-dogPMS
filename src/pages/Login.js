import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Property1Form from "../components/Property1Form";
import SizeSmallSelectedYes from "../components/SizeSmallSelectedYes";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/dashboard-events");
  }, [navigate]);

  return (
    <div className="login">
      <img className="bg-icon" alt="" src="/bg.svg" />
      <b className="login1">Login</b>
      <div className="welcome-administrator">Welcome Administrator!</div>
      <div className="logo-name">
        <div className="logo">
          <img
            className="logokadog-removebg-preview-2-icon"
            alt=""
            src="/logokadogremovebgpreview-2@2x.png"
          />
        </div>
        <img
          className="logokadog-removebg-preview-3-icon"
          alt=""
          src="/logokadogremovebgpreview-3@2x.png"
        />
      </div>
      <div className="remember-me">
        <div className="remember-password">Remember password</div>
        <img className="checkmark-icon" alt="" src="/checkmark.svg" />
      </div>
      <Property1Form
        text="Username"
        property1FormBorderRadius="10px"
        property1FormBorder="1px solid var(--color-darkgray-100)"
        property1FormWidth="454px"
        property1FormHeight="67px"
        property1FormPosition="absolute"
        property1FormTop="340px"
        property1FormLeft="778px"
      />
      <Property1Form
        text="Password"
        property1FormBorderRadius="10px"
        property1FormBorder="1px solid var(--color-darkgray-100)"
        property1FormWidth="454px"
        property1FormHeight="67px"
        property1FormPosition="absolute"
        property1FormTop="435px"
        property1FormLeft="778px"
      />
      <SizeSmallSelectedYes
        s="Login"
        sizeSmallSelectedYesBorderRadius="30px"
        sizeSmallSelectedYesBackgroundColor="#0386d0"
        sizeSmallSelectedYesWidth="454px"
        sizeSmallSelectedYesPosition="absolute"
        sizeSmallSelectedYesTop="778px"
        sizeSmallSelectedYesLeft="778px"
        sizeSmallSelectedYesHeight="53px"
        sizeSmallSelectedYesPadding="var(--padding-3xs) var(--padding-41xl) var(--padding-3xs) 10px"
        sizeSmallSelectedYesBoxSizing="border-box"
        sizeSmallSelectedYesCursor="pointer"
        sizeSmallSelectedYesBorder="unset"
        sColor="#fff"
        sFontWeight="unset"
        onButtonContainerClick={onButtonContainerClick}
      />
    </div>
  );
};

export default Login;
