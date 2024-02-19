import React from "react";
import { FooterLinkComponentProps } from "../../types";
import { Link } from "react-router-dom";
import { AppColors } from "../../themes/colors";
import "./style.css";
const FooterLinkContainer: React.FC<{ links: FooterLinkComponentProps }> = ({
  links,
}) => {
  return (
    <div className="flex-1">
      <h4 style={{ color: "white" }} className="popins-bold mb-4">
        {links.title}
      </h4>

      {links.links.map((link, index: number) => {
        return (
          <div className="mb-2">
            <Link
              className="footerLink"
              to={link.uri}
              style={{ color: AppColors.gray }}
            >
              {link.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default FooterLinkContainer;
