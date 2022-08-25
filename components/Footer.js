import React from 'react'
import SocialIcon from './common/SocialIcon'
import { StyledContainer } from './common/styled/Container.styled'
import { StyledFooter } from './styled/Footer.styled'

const Footer = () => {
  return (
    <StyledFooter>
      <StyledContainer>
        <div>
            <div>
                <img src="static/images/fundfolioLogo.svg" />
                <p>kinfra Hi-tech park <br /> kalamassery, kochi <br /> kerala 683503</p>
                <div>
                    <SocialIcon src={'static/images/social/youtubeIcon.svg'} />
                    <SocialIcon src={'static/images/social/instagramIcon.svg'} />
                    <SocialIcon src={'static/images/social/TwitterIcon.svg'} />
                    <SocialIcon src={'static/images/social/facebookIcon.svg'} />
                </div>
            </div>

            {/* //componet for links */}


        </div>
      </StyledContainer>
        <p>made with 💚 by fundfolio</p>
    </StyledFooter>
  )
}

export default Footer