import { Outlet } from "react-router-dom";
import ApplicationNavigationBar from "../components/NavBar/nav";

const ApplicationMainScreen = () => {
  return (
    <div className="container mx-auto mt-5">
      <div>
        <ApplicationNavigationBar />
      </div>
      <Outlet />
    </div>
  );
};

export default ApplicationMainScreen;
