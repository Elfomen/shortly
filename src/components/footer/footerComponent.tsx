import { ReactComponent as FacebookImage } from "../../assets/images/icon-facebook.svg";
import { ReactComponent as TwitterImage } from "../../assets/images/icon-twitter.svg";
import { ReactComponent as PinterestImage } from "../../assets/images/icon-pinterest.svg";
import { ReactComponent as InstaImage } from "../../assets/images/icon-instagram.svg";
import { getFooterLinks } from "../../utils/home";
import FooterLinkContainer from "./footerLinkContainer";

const FooterComponent = () => {
  return (
    <footer
      style={{ backgroundColor: "rgb(35,32,39)" }}
      className="pl-20 pr-20 pt-20 pb-40"
    >
      <div
        className="footerContainerComp flex flex-row"
        style={{ alignItems: "flex-start" }}
      >
        <div className="logo flex-2">
          <h3
            className="poppins-bold mr-10"
            style={{ fontSize: "27px", color: "white" }}
          >
            Shortly
          </h3>
        </div>
        {getFooterLinks().map((links) => {
          return <FooterLinkContainer links={links} />;
        })}
        <div className="logo flex-1 flex flex-row items-center">
          <div className="mr-5">
            <FacebookImage className="socialIcons" />
          </div>
          <div className="mr-5">
            <TwitterImage className="socialIcons" />
          </div>
          <div className="mr-5">
            <PinterestImage />
          </div>
          <div>
            <InstaImage />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
