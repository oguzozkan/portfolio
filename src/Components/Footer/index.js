import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterLinkItems,
  FooterLink,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebRights,
} from "./FooterElements";
const Footer = ({ lightbg }) => {
  useEffect(() => {
    // AOS.init({});
  }, []);
  return (
    <FooterContainer
      // data-aos="fade-zoom-in"
      // data-aos-easing="ease-in-back"
      // data-aos-delay="100"
      // data-aos-offset="0"
      lightbg={lightbg}
    >
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems lightbg={lightbg} id="contacts">
              <FooterLinkTitle>About ME</FooterLinkTitle>
              <FooterLink to="#" lightbg={lightbg}>
                About Us
              </FooterLink>
              <FooterLink to="#" lightbg={lightbg}>
                Who am I
              </FooterLink>
            </FooterLinkItems>
            <FooterLinkItems lightbg={lightbg}>
              <FooterLinkTitle>About ME</FooterLinkTitle>
              <FooterLink to="#" lightbg={lightbg}>
                About Us
              </FooterLink>
              <FooterLink to="#" lightbg={lightbg}>
                Who am I
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems lightbg={lightbg}>
              <FooterLinkTitle>About ME</FooterLinkTitle>
              <FooterLink to="#" lightbg={lightbg}>
                About Us
              </FooterLink>
              <FooterLink to="#" lightbg={lightbg}>
                Who am I
              </FooterLink>
            </FooterLinkItems>
            <FooterLinkItems lightbg={lightbg}>
              <FooterLinkTitle>About ME</FooterLinkTitle>
              <FooterLink to="#" lightbg={lightbg}>
                About Us
              </FooterLink>
              <FooterLink to="#" lightbg={lightbg}>
                Who am I
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" lightbg={lightbg}>
              Oguzhan
            </SocialLogo>
            <WebRights lightbg={lightbg}>
              Oguzhan {new Date().getFullYear()} All right reseved.
            </WebRights>
            <SocialIcons>
              <SocialIconLink
                href="https://www.facebook.com/oguzhan.ozkan.547"
                aria-label="Facebook"
                lightbg={lightbg}
              >
                <FaFacebook></FaFacebook>
              </SocialIconLink>

              <SocialIconLink
                href="https://www.instagram.com/oguzhanzkn/"
                aria-label="Instagram"
                lightbg={lightbg}
              >
                <FaInstagram></FaInstagram>
              </SocialIconLink>
              <SocialIconLink
                lightbg={lightbg}
                href="https://www.linkedin.com/in/oguzhan-ozkan-588465175"
                aria-label="Linkedin"
              >
                <FaLinkedin></FaLinkedin>
              </SocialIconLink>

              <SocialIconLink
                href="https://github.com/oguzozkan"
                aria-label="Github"
                lightbg={lightbg}
              >
                <FaGithub></FaGithub>
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
