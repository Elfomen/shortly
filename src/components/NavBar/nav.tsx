import { Link } from "react-router-dom";

const ApplicationNavigationBar = () => {
  return (
    <div className="flex flex-row items-center">
      <div className="flex-1 flex flex-row items-center grow-2">
        <h3 className="poppins-bold mr-10">Shortly</h3>
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
        <div className="login">
          <Link to={"#"} className="color-gray">
            Login
          </Link>
        </div>
        <div className="login"></div>
      </div>
    </div>
  );
};

export default ApplicationNavigationBar;
