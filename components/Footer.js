import React from "react";
import FooterLinks from "./common/FooterLinks";
import SocialIcon from "./common/SocialIcon";
import { StyledContainer } from "./common/styled/Container.styled";
import { StyledFooter } from "./styled/Footer.styled";

const Footer = () => {
  const footerLinks1 = ["marketfeed.news", "marketfeed.app", "breakout"];

  const footerLinks2 = ["about", "career"];

  const footerLinks3 = [
    "disclaimer",
    "help & support",
    "privacy policy",
    "terms & conditions",
  ];

  return (
    <StyledFooter>
      <StyledContainer>
        <div>
          <div>
            <img src="static/images/fundfolioLogo.svg" />
            <p>
              kinfra Hi-tech park <br /> kalamassery, kochi <br /> kerala 683503
            </p>
            <div>
              <SocialIcon src={"static/images/social/youtubeIcon.svg"} />
              <SocialIcon src={"static/images/social/instagramIcon.svg"} />
              <SocialIcon src={"static/images/social/TwitterIcon.svg"} />
              <SocialIcon src={"static/images/social/facebookIcon.svg"} />
            </div>
          </div>

          <div>
            <FooterLinks head={"Products"} links={footerLinks1} />
            <FooterLinks head={"Company"} links={footerLinks2} />
            <FooterLinks head={"More"} links={footerLinks3} />
          </div>
        </div>
      </StyledContainer>
      <p>made with 💚 by fundfolio</p>
    </StyledFooter>
  );
};

export default Footer;
