import React from "react";
import { StyledFooterLinks } from "./styled/FooterLinks.styled";

const FooterLinks = ({ head, links }) => {
  return (
    <StyledFooterLinks>
      <h6>{head}</h6>
      <ul>
        {links.map((link , key) => (
          <a key={key}>
            <li>{link}</li>
          </a>
        ))}
      </ul>
    </StyledFooterLinks>
  );
};

export default FooterLinks;
