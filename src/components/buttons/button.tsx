import React from "react";
import { ButtonProps } from "../../types";

const ButtonComponent: React.FC<ButtonProps> = ({
  label,
  onPress,
  radius,
  size,
  backgroundColor,
  color,
}) => {
  return (
    <div style={{}}>
      <label htmlFor="">{label}</label>
    </div>
  );
};

const getButtonStyles = (props: ButtonProps) => {
  return {
    borderRadius: props.radius || 22,
    backgroundColor: props.backgroundColor || "",
  };
};

export default ButtonComponent;
