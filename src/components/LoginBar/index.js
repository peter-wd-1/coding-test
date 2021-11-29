import React from "react";
import twitterIcon from "images/Twitter.svg";
import facebookIcon from "images/Facebook.svg";
import instagramIcon from "images/Instagram.svg";
import { LoginButton, LoginSection, SocialSection } from "./Atoms";

export default function LoginBar({ forceRender }) {
  return (
    <LoginSection cols={2} forceRender={forceRender}>
      <SocialSection>
        <img src={twitterIcon} alt="twitterIcon" />
        <img src={facebookIcon} alt="facebookIcon" />
        <img src={instagramIcon} alt="instagramIcon" />
      </SocialSection>
      <LoginButton>
        <p style={{ paddingRight: "20px", fontSize: "1.2rem" }}>Log In</p>
      </LoginButton>
    </LoginSection>
  );
}
