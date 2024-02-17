import { useState } from "react";
import ButtonComponent from "../buttons/button";
import { AppColors } from "../../themes/colors";

const LinkHistory = () => {
  const [history, setHistory] = useState([1, 1, 1, 1, 1]);
  return (
    <div>
      <br />
      {history.map((his) => (
        <div
          style={{ borderRadius: "8px" }}
          className="mb-5 list_history_container flex flex-row items-center"
        >
          <div className="flex-1">
            <span>
              https://testingthelink.com/gobackhome/0809w8e508w9385ufsk/pp23js
            </span>
          </div>
          <div className="flex flex-row items-center">
            <span style={{ color: AppColors.cyan }} className="mr-3">
              https://rel.ink/k43yu
            </span>
            <ButtonComponent
              label="Copy"
              radius={8}
              size="large"
              onPress={() => {}}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LinkHistory;
