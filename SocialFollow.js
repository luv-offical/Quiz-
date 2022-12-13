import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div style={{}}>
         <a href="https://youtu.be/Dp6lbdoprZ0"
       style={{color:"	#FF0000", padding:"10px",}} >
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a href="https://www.facebook.com/learnbuildteach/"
        style={{color:"#3b5998",}}>
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.twitter.com/jamesqquick" style={{color:" #00acee",padding:"10px"}}>
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://"
        style={{color:"#bc2a8d"}}>
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
  );
}