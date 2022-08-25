import Image from "next/image";
import React from "react";
import Button from "./Button";

import { StyledHeader } from "./styled/Navbar.styled";

const Navbar = () => {
  return (
    <StyledHeader>
      <Image  width="130" height="50" src="/static/images/logo.svg" alt="" />
      <Button
        btnText="chat with us"
        src={"/static/images/social/wtsp.png"}
        iconOnly={true}
      />
    </StyledHeader>
  );
};

export default Navbar;
