import React, { useState } from "react";
import ButtonComponent from "../buttons/button";
import { AppColors } from "../../themes/colors";
import { LinksInterface } from "../../types";

const LinkHistory: React.FC<{ links: LinksInterface[] }> = ({ links }) => {
  return (
    <div className="linkListContainer">
      <br />
      {links?.map((his, key: number) => (
        <div
          style={{ borderRadius: "8px" }}
          className="mb-5 list_history_container flex flex-row items-center"
          data-testid="link_history_list_testid"
          key={key}
        >
          <div className="flex-1">
            <span style={{ fontSize: "15px" }}>
              {his?.url?.slice(0, 42)}
              {his?.url?.length > 42 ? "..." : ""}
            </span>
          </div>
          <hr className="link_result_seperator" />
          <div className="flex flex-row items-center link_history_result_container">
            <span
              style={{ color: AppColors.cyan, fontSize: "15px" }}
              className="mr-3"
            >
              {his?.shorten}
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
