import { useEffect, useState } from "react";
import ButtonComponent from "../buttons/button";
import "./style.css";
import LinkHistory from "./list_history";
import axiosEvent from "../../hooks/useAxios";
import { LinksInterface } from "../../types";

const HomeLinkShortenerComponent = () => {
  const [error, setError] = useState<boolean>(false);
  const [url, setUrl] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [allLinks, setAllLinks] = useState<LinksInterface[]>([]);
  const handleInputChange = (e: any) => {
    const value = e.target.value;
    if (value) {
      setError(false);
      setUrl(value);
    } else {
      setError(true);
    }
  };

  function isValidUrl(url: string) {
    // Regular expression pattern to match a URL
    var urlPattern =
      /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/;
    return urlPattern.test(url);
  }

  const shortenUrl = async (e: any) => {
    e.preventDefault();
    if (!url) {
      setError(true);
    } else {
      if (isValidUrl(url)) {
        setError(false);
        try {
          setLoading(true);
          let shortened = await axiosEvent.post("", {
            url: url,
          });
          setLoading(false);
          const result = shortened.data;
          const data: LinksInterface = {
            url: result?.url,
            shorten: result?.shrtlnk,
          };

          setAllLinks((oldLinks) => [data, ...oldLinks]);
          localStorage.setItem("links", JSON.stringify([data, ...allLinks]));
        } catch (error: any) {
          setLoading(false);
          console.log("====================================");
          console.log(error?.response?.data);
          console.log("====================================");
        }
      } else {
        setError(true);
      }
    }
  };

  useEffect(() => {
    const list = localStorage.getItem("links");
    setAllLinks(JSON.parse(list || "[]"));
  }, []);

  return (
    <div className="linkMainContainer">
      <div className="linkshortenerContainer">
        <form action="" onSubmit={shortenUrl}>
          <div className="flex flex-row items-center linsShortenerFormContainer">
            <div
              className={`flex-1 mr-5 ${
                error && "formError"
              } relative shortenerInputContainer`}
            >
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
              className="linkFormSubmitButton"
              loading={loading}
            />
          </div>
        </form>
      </div>

      <div style={{ width: "100%", margin: "auto" }}>
        <LinkHistory links={allLinks} />
      </div>
    </div>
  );
};

export default HomeLinkShortenerComponent;
