import { Link } from "react-router-dom";
import ButtonComponent from "../buttons/button";
import "./style.css";
import { useState } from "react";
import Logo from "../../assets/images/logo.svg";
const ApplicationNavigationBar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="mb-5 navigationMainContainerNavbar ml-20 mr-20 flex flex-row items-center">
        <div className="flex-1 flex flex-row items-center grow-2">
          {/* <h3 className="poppins-bold mr-10" style={{ fontSize: "27px" }}>
            Shortly
          </h3> */}
          <div className="mr-10 flex-1">
            <img src={Logo} />
          </div>
          <Link to={"#"} className="mr-5 color-gray">
            Features
          </Link>
          <Link to={"#"} className="mr-5 color-gray">
            Pricing
          </Link>
          <Link to={"#"} className="mr-5 color-gray">
            Resources
          </Link>
        </div>
        <div className="flex flex-row items-center">
          <div className="login mr-10">
            <Link to={"#"} className="color-gray">
              Login
            </Link>
          </div>
          <div className="signup">
            <ButtonComponent label="Signup" onPress={() => {}} />
          </div>
        </div>
      </div>
      <div style={{}} className="mr-10 burgerIconButton flex flex-row">
        <div className="flex-1 ml-5">
          <img src={Logo} />
        </div>
        <span
          className=""
          style={{ cursor: "pointer", fontSize: "24px" }}
          onClick={() => setShow(!show)}
        >
          &#127828;
        </span>
      </div>
      <div className={`navbarHamburgerMenu ${show && "show"}`}>
        <div className="flex-1 mt-5">
          <Link to={"#"} className="mr-5 color-gray poppins-bold">
            Features
          </Link>
        </div>
        <div className="flex-1">
          <Link to={"#"} className="mr-5 color-gray poppins-bold">
            Pricing
          </Link>
        </div>
        <div className="flex-1">
          <Link to={"#"} className="mr-5 color-gray poppins-bold">
            Resources
          </Link>
        </div>
        <hr style={{ color: "white" }} />
        <div className="flex-1">
          <Link to={"#"} className="mr-5 color-gray poppins-bold">
            Login
          </Link>
        </div>
        <div className="signup flex-1">
          <ButtonComponent label="Signup" onPress={() => {}} />
        </div>
      </div>
    </>
  );
};

export default ApplicationNavigationBar;
