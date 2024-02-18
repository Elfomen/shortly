import { useState } from "react";
import ButtonComponent from "../buttons/button";
import { AppColors } from "../../themes/colors";

const LinkHistory = () => {
  const li = "https://testingthelink.com/gobackhome/0809w8e508w9385ufsk/pp23js";
  const [history, setHistory] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1]);
  return (
    <div className="linkListContainer">
      <br />
      {history.map((his) => (
        <div
          style={{ borderRadius: "8px" }}
          className="mb-5 list_history_container flex flex-row items-center"
        >
          <div className="flex-1">
            <span style={{ fontSize: "15px" }}>
              {li.slice(0, 42)}
              {li?.length > 42 ? "..." : ""}
            </span>
          </div>
          <hr className="link_result_seperator" />
          <div className="flex flex-row items-center link_history_result_container">
            <span
              style={{ color: AppColors.cyan, fontSize: "15px" }}
              className="mr-3"
            >
              https://rel.ink/k43yu
            </span>
            <ButtonComponent
              label="Copy"
              radius={8}
              size="large"
              onPress={() => {}}
              className="link_result_copy_button"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LinkHistory;
