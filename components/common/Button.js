import Image from "next/image";
import React from "react";
import { StyledButton } from "./styled/Button.style";

const Button = ({ btnText, src, iconOnly }) => {
  return (
    <StyledButton iconOnly={iconOnly}>
      {src && <Image src={src} />}
      {btnText}
    </StyledButton>
  );
};

export default Button;
