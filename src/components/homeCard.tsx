import React from "react";
import { AppColors } from "../themes/colors";

interface HomeCardProps {
  image: any;
  title: string;
  description: string;
  nmr?: boolean; // no margin right ?
}
const HomeCardComponent: React.FC<HomeCardProps> = ({
  image,
  title,
  description,
  nmr,
}) => {
  return (
    <div className={`first flex-1 ${!nmr && "mr-5"} home_card`}>
      <div className="icon absolute">
        <img src={image} alt="" />
      </div>
      <div className="mt-20 ml-5 mr-5">
        <h4 className="poppins-bold mb-5">{title}</h4>
        <p style={{ color: AppColors.gray, textAlign: "justify" }}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default HomeCardComponent;
