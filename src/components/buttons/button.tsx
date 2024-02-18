import React from "react";
import { ButtonProps } from "../../types";
import { AppColors } from "../../themes/colors";
import "./style.css";
const ButtonComponent: React.FC<ButtonProps> = ({
  label,
  onPress,
  radius,
  size,
  backgroundColor,
  color,
  width,
  type,
  className,
}) => {
  return (
    <input
      type={type || "button"}
      onClick={onPress}
      style={{
        borderRadius: radius || 22,
        backgroundColor: backgroundColor || AppColors.cyan,
        color: color || "white",
        cursor: "pointer",
        width: width || "125px",
        height: size === "large" ? "250px" : size === "medium" ? "100px" : "70",
      }}
      className={`app_button ${className}`}
      value={label}
    />
  );
};

const getButtonStyles = (props: Partial<ButtonProps>) => {
  return {};
};

export default ButtonComponent;
