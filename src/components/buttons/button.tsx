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
  loading,
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
        pointerEvents: loading ? "none" : "visible",
        height: size === "large" ? "250px" : size === "medium" ? "100px" : "70",
      }}
      className={`app_button ${className}`}
      value={loading ? "Loading..." : label}
    />
  );
};

export default ButtonComponent;
