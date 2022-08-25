import Image from "next/image";
import React from "react";
import { StyledFeaturedItem } from "./styled/FeaturedItem.styled";

const FeaturedItem = ({ head, text, src }) => {
  return (
    <StyledFeaturedItem>
      <Image width={60}  height={60} src={src} />
      <div>
        <h4>{head}</h4>
        <p>{text}</p>
      </div>
    </StyledFeaturedItem>
  );
};

export default FeaturedItem;
