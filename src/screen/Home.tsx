import ButtonComponent from "../components/buttons/button";
import { AppColors } from "../themes/colors";
import SideImage from "../assets/images/illustration-working.svg";
import HomeLinkShortenerComponent from "../components/LinkShortener/link";
import "./style.css";
import GraphImage from "../assets/images/icon-brand-recognition.svg";
import PensilImage from "../assets/images/icon-detailed-records.svg";
import FullyCustom from "../assets/images/icon-fully-customizable.svg";

import FooterComponent from "../components/footer/footerComponent";
import HomeCardComponent from "../components/homeCard";

const HomeScreen = () => {
  return (
    <div style={{}}>
      <div className="ml-20 mr-20">
        <div className="mt-20 flex flex-row items-center homeHeaderBanner">
          <div className="flex-2">
            <h1 className="poppins-bold  header-one">
              More than just shorter links
            </h1>
            <p style={{ color: AppColors.gray }} className="mtp-5 mb-4">
              Build your brand's recognition and get detailed insignts on now
              your links are performing
            </p>
            <div className="flex flex-row items-center getStartedButton">
              <ButtonComponent label="Get Started" onPress={() => {}} />
            </div>
          </div>
          <div
            className="flex-2"
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <img
              style={
                {
                  // width: "450px",
                  // height: "450px",
                }
              }
              src={SideImage}
              alt="Illustrator Working"
            />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />

      <div
        style={{
          backgroundColor: "rgb(240,241,246)",
          // height: "400px",
        }}
      >
        <div className="">
          <HomeLinkShortenerComponent />
        </div>

        <div
          style={{ width: "40%", margin: "auto" }}
          className="advancedStatoContainer"
        >
          <center>
            <h2 className="poppins-bold  header-two">Advanved Statistics</h2>
            <p className="" style={{ color: AppColors.gray }}>
              Track how your link are performing accross the web with our
              advanced statistics dashboard
            </p>
          </center>
        </div>
        <br />
        <br />
        <div className="ml-20 mr-20 relative statistics_details_Container">
          <div className="absolute middle_line"></div>
          <div className="flex flex-row items-center homeCardComponentContainer">
            <HomeCardComponent
              image={GraphImage}
              title="Brand Recognition"
              description="Boost your brand recognition with each click. Generic links
           don't mean a thing. Branded links help install confidence in
           your content."
            />

            <HomeCardComponent
              image={PensilImage}
              title="Detailed Records"
              description=" Gain insights into who is clicking your links. Knowing where
              and when people engage with your content helps inform better
              decissions"
            />

            <HomeCardComponent
              image={GraphImage}
              nmr={true}
              title="Fully customizable"
              description=" Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement."
            />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />

        <br />
        <br />
        <br />
        <div className="boostyourlinktoday">
          <center>
            <h3
              className="poppins-bold mb-8"
              style={{ color: "white", fontSize: "29px" }}
            >
              Boost your links today
            </h3>
            <ButtonComponent label="Get Started" size="large" />
          </center>
        </div>

        <FooterComponent />

        <div></div>
      </div>
    </div>
  );
};

export default HomeScreen;
