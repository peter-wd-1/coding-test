import React, { Fragment } from "react";
import twitterIcon from "images/Twitter.svg";
import facebookIcon from "images/Facebook.svg";
import instagramIcon from "images/Instagram.svg";

export default function LoginBar(){
  return (
    <Fragment>
      <div name="socialShare">
        <img src={twitterIcon} alt="twitterIcon" />
        <img src={facebookIcon} alt="facebookIcon" />
        <img src={instagramIcon} alt="instagramIcon" />
      </div>
      <div>
        <p>Log In</p>
      </div>
    </Fragment>
  )
}
