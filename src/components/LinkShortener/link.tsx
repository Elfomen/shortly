import { useState } from "react";
import ButtonComponent from "../buttons/button";
import "./style.css";
import LinkHistory from "./list_history";

const HomeLinkShortenerComponent = () => {
  const [error, setError] = useState<boolean>(false);
  const [url, setUrl] = useState<string>("");

  const handleInputChange = (e: any) => {
    const value = e.target.value;
    if (value) {
      setError(false);
      setUrl(value);
    } else {
      setError(true);
    }
  };

  const shortenUrl = async (e: any) => {
    e.preventDefault();
    if (!url) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <div className="linkMainContainer">
      <div className="linkshortenerContainer">
        <form action="" onSubmit={shortenUrl}>
          <div className="flex flex-row items-center">
            <div className={`flex-1 mr-5 ${error && "formError"} relative`}>
              <input
                className="shortenerInput"
                type="text"
                placeholder="Shorten a link here"
                onChange={handleInputChange}
              />
              {error && (
                <span
                  style={{
                    color: "red",
                    fontSize: "14px",
                    bottom: -24,
                    left: 0,
                  }}
                  className="absolute"
                >
                  <i>Please add a link</i>
                </span>
              )}
            </div>
            <ButtonComponent
              radius={8}
              size="large"
              label="Shorten it!"
              onPress={() => {}}
              type="submit"
            />
          </div>
        </form>
      </div>

      <div style={{ width: "100%", margin: "auto" }}>
        <LinkHistory />
      </div>
    </div>
  );
};

export default HomeLinkShortenerComponent;
